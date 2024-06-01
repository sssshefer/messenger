import React, {useContext, useState, useEffect, useCallback, FC, createContext} from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import {useContacts} from '../ContactsProvider/ContactsProvider';
import {useSocket} from '../SocketProvider';
import {arrayContentEquality} from "../../utils/arrayContentEquality";
import {IConversation} from "../../models/IConversation";
import {formatConversation} from "./utils/formatConversation";
import {checkConversationExists} from "./utils/checkConversationExists";
import {updateExistingConversation} from "./utils/updateExistingConversation";
import {IFormattedConversation} from "../../models/IFormattedConversation";

interface ConversationContextProps {
    conversations: IFormattedConversation[],
    createConversation: (recipientsIds: string[]) => void,
    selectedConversation: IFormattedConversation,
    sendMessage: (recipients: string[], text: string) => void,
    selectConversationIndex: (index: number) => void
}

const ConversationsContext = createContext<ConversationContextProps>(
    {
        conversations: [],
        createConversation: () => {
        },
        selectedConversation: {recipients: [], messages: [], selected: false},
        sendMessage: () => {},
        selectConversationIndex: () => {}
    })

export function useConversations() {
    return useContext(ConversationsContext)
}

interface ConversationProviderProps {
    id: string,
    children: React.ReactNode
}

export const ConversationsProvider: FC<ConversationProviderProps> = ({id, children}) => {
    const [conversations, setConversations] = useLocalStorage('conversations', []) as [IConversation[], (value: IConversation[] | ((prevValue: IConversation[]) => IConversation[])) => void]
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const {contacts} = useContacts()

    const socket = useSocket()

    function createConversation(recipientsIds: string[]) {
        setConversations(prevConversations => {
            return [...prevConversations, {recipientIds: recipientsIds, messages: []}]
        })
    }

    const addMessageToConversations = useCallback(
        ({recipientsIds, text, senderId}: { recipientsIds: string[], text: string, senderId: string }) => {
            setConversations((prevConversations: IConversation[]) => {
                const newMessage = {senderId, text}

                const conversationExist = prevConversations.some((prevConversation: IConversation) =>
                    checkConversationExists(prevConversation.recipientIds, recipientsIds)
                )


                if (conversationExist) {
                    return updateExistingConversation(prevConversations, newMessage, recipientsIds)
                } else {
                    return [
                        ...prevConversations,
                        {recipientIds: recipientsIds, messages: [newMessage]}
                    ]
                }

            })
        }, [setConversations])

    useEffect(() => {
        if (socket == null) return

        socket.on('receive-message', addMessageToConversations)

        return () => {
            socket.off('receive-message')
        }
    }, [socket, addMessageToConversations])

    function sendMessage(recipientIds: string[], text: string) {
        socket?.emit('send-message', {recipients: recipientIds, text})

        addMessageToConversations({recipientsIds: recipientIds, text, senderId: id})
    }

    const formattedConversations = conversations.map((conversation, index) =>
        formatConversation(conversation, contacts, id, index, selectedConversationIndex)
    );


    const value = {
        conversations: formattedConversations,
        createConversation,
        selectedConversation: formattedConversations[selectedConversationIndex],
        sendMessage,
        selectConversationIndex: setSelectedConversationIndex,

    }

    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    )
}

