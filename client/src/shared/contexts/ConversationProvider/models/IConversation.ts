import {IMessage} from "./IMessage";

export interface IConversation {
    recipientIds: string[],
    messages: IMessage[]
}