import { configureStore } from "@reduxjs/toolkit";
import CardsReducer from "./cards"
import LoaderReducer from "./loading"

const store = configureStore({
    reducer: {
        cards: CardsReducer,
        loader: LoaderReducer
    }
})

export default store