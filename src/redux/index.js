import {configureStore} from "@reduxjs/toolkit";
import products from "./products";
import popup from "./popup";

const store = configureStore({
    reducer: {
        products,
        popup
    }
})

export default store