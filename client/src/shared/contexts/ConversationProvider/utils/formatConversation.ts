import {IMessage} from "../models/IMessage";
import {IConversation} from "../models/IConversation";
import {IContact} from "../../ContactsProvider/models/IContact";
import {IFormattedRecipient} from "../models/IFormattedRecipient";
import {IFormattedMessage} from "../models/IFormattedMessage";
import {IFormattedConversation} from "../models/IFormattedConversation";

interface formatConversationProps {
    (conversation: IConversation,
     contacts: IContact[],
     id: string,
     index: number,
     selectedConversationIndex: number): IFormattedConversation
}

export const formatConversation: formatConversationProps = (conversation, contacts, id, index, selectedConversationIndex) => {
    const recipients = formatRecipients(conversation.recipientIds, contacts);
    const messages = formatMessages(conversation.messages, contacts, id);
    const selected = index === selectedConversationIndex;
    return { messages, recipients, selected};
};

const formatRecipients = (recipientIds:string[], contacts:IContact[]):IFormattedRecipient[] => {
    return recipientIds.map(recipient => {
        const contact = contacts.find(contact => contact.id === recipient);
        const name = (contact && contact.name) || recipient;
        return {id: recipient, name};
    });
};

const formatMessages = (messages:IMessage[], contacts:IContact[], id:string):IFormattedMessage[] => {
    return messages.map(message => {
        const contact = contacts.find(contact => contact.id === message.senderId);
        const name = (contact && contact.name) || message.senderId;
        const fromMe = id === message.senderId;
        return {...message, senderName: name, fromMe};
    });
};


