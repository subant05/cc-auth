import { type MessagePayloadType } from "../types/message-payload";

interface MessagesActions {
    type: string;
    payload: MessagePayloadType;
}

export {type MessagesActions}