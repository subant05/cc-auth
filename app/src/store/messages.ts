import { createSlice } from "@reduxjs/toolkit";
import { MessagesState } from "../models/interface/message-state";
import { MessagesActions } from "../models/interface/message-actions";

const initialState: MessagesState ={ messages:[]}

const messages = createSlice({
    name:"messages",
    initialState:initialState,
    reducers: {
        addMessages:(state:MessagesState, actions:MessagesActions)=>{
            debugger;
            state.messages = actions.payload
        },
        removeMessages:(state:MessagesState)=>{
            state.messages = []
        }
    }
})

export const messageActions = messages.actions
export default messages.reducer