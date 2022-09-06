import {configureStore} from "@reduxjs/toolkit";
import products from "./products";
import popup from "./popup";
import cards from "./cards";

const store = configureStore({
    reducer: {
        products,
        popup,
        cards
    }
})

export default store