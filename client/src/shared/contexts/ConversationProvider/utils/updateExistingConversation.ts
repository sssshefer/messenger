import {IConversation} from "../models/IConversation";
import {checkConversationExists} from "./checkConversationExists";
import {IMessage} from "../models/IMessage";

interface updateExistingConversationProps {
    (prevConversations: IConversation[],
     newMessage: IMessage,
     recipientsIds: string[]): IConversation[]
}

export const updateExistingConversation: updateExistingConversationProps = (prevConversations, newMessage, recipientsIds) => {
    return prevConversations.map((prevConversation: IConversation) => {
        if (checkConversationExists(prevConversation.recipientIds, recipientsIds)) {
            return {
                ...prevConversation,
                messages: [...prevConversation.messages, newMessage]
            }
        }
        return prevConversation;
    })
}