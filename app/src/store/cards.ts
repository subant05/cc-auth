import { createSlice } from "@reduxjs/toolkit";
import { type CardAction } from "../models/interface/card-actions";
import { type CardState } from "../models/types/card-state";
import { type Dispatch } from "@reduxjs/toolkit";
import { CardPayloadType } from "../models/types/card-payload";
import { loaderActions } from "./loading";

const cards = createSlice({
    name:"card",
    initialState: [],
    reducers: {
        addCard(state: CardState, actions: CardAction){
            if(actions.payload && state.indexOf(actions.payload) === -1)
                state.push(actions.payload)
        },
        removeCard(state: CardState, actions: CardAction){
            state = state.filter(card=>card !== actions.payload)
        }
    }
})

export const actions = cards.actions
export default cards.reducer;

// Thunk
export const addAsyncCard = (cardNumber:CardPayloadType) => {
   return  async (dispatch:Dispatch) => {
        dispatch(loaderActions.load())
        try{
            const response = await fetch("/api/cc-auth",{
                method:"Post",
                body:JSON.stringify({cardNumber:cardNumber}),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            if(!response.ok){
                const msg = response.text()
                throw new Error("Error: " + msg)
            }

            dispatch(cards.actions.addCard(cardNumber))
        } catch(e: any){
            console.error(e.message)
            console.error(e.stack)
        } finally {
            dispatch(loaderActions.unload())
        }

    } // End or Curry
}