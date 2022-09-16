import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

const basket = createSlice({

    name: 'basket',
    initialState: {
        order: []
    },
    reducers: {
        AddProduct: (state, action) => {
            state.order = [...state.order, action.payload]

        },
        RemoveProduct: (state, action) => {
            state.order = state.order.filter(item => item.id !== action.payload)
        }
    }
})
export default basket.reducer
export const {AddProduct, RemoveProduct} = basket.actions