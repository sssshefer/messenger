import {IFormattedRecipient} from "./IFormattedRecipient";
import {IFormattedMessage} from "./IFormattedMessage";

export interface IFormattedConversation {
    recipients: IFormattedRecipient[],
    messages: IFormattedMessage[],
    selected: boolean,
}