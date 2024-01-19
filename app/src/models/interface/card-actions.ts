import { type CardPayloadType } from "../types/card-payload";

interface CardAction {
    type: string;
    payload: CardPayloadType;
}

export {type CardAction}