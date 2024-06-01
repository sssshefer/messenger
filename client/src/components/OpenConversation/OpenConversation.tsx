import React, {useState, useCallback} from 'react'
import {useConversations} from '../../shared/contexts/ConversationProvider/ConversationProvider'
import Message from "./Message/Message";
import ChatInput from "./ChatInput/ChatInput";

export default function OpenConversation() {
    const [text, setText] = useState('')
    const setRef = useCallback((node:HTMLDivElement|null) => {
        if (node) {
            node.scrollIntoView({ behavior:'smooth' })
        }
    }, [])

    const {sendMessage, selectedConversation} = useConversations()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        sendMessage(selectedConversation.recipients.map(r => r.id), text)
        setText('')
    }

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">
                <div className="d-flex flex-column align-items-start justify-content-end px-3">
                    {selectedConversation.messages.map((message, index) => {
                        const lastMessage = selectedConversation.messages.length - 1 === index
                        return (
                            <Message
                                message={message}
                                index={index}
                                lastMessage={lastMessage}
                                setRef={setRef}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
            <ChatInput text={text} setText={setText} handleSubmit={handleSubmit} />
        </div>
    )
}