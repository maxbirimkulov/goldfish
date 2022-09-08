import {configureStore} from "@reduxjs/toolkit";
import product from "./product";
import popup from "./popup";
import cards from "./cards";

const store = configureStore({
    reducer: {
        product,
        popup,
        cards
    }
})

export default store