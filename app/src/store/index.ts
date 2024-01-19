import { configureStore } from "@reduxjs/toolkit";
import CardsReducer from "./cards"
import LoaderReducer from "./loading"
import MessagesReducer from "./messages"

const store = configureStore({
    reducer: {
        cards: CardsReducer,
        loader: LoaderReducer,
        messages: MessagesReducer,
    }
})

export default store