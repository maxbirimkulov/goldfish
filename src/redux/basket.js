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
            state.order = state.order.filter(item => item._id !== action.payload)
        },
        RemoveAllProducts: (state) => {
            state.order = []
        }
    }
})
export default basket.reducer
export const {AddProduct, RemoveProduct, RemoveAllProducts} = basket.actions