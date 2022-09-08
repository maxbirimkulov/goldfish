import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const getAllPosts = createAsyncThunk(
    'products/getAllPosts',
    async (_, {rejectWithValue} ) => {
        try {
            const res = await axios('http://localhost:4444/cards')

            if (res.status !== 200){
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message)
        }

    }
)

const products = createSlice({
    name: 'products',
    initialState: {
        products: [{id: 1, name:'maks'}],
        filter: {
            price: {
                from: 0,
                to: 10000
            }
        },
        productsLength : 0,
        test : 123,
        artem: [{id:1, name:'Artem'}],
        name: '',
        error : '',
        posts: [],
        status: ''
    },
    reducers: {
        addOneForTest : (state, action) => {
            state.test = state.test + 1
        },
        addOneArtem : (state, action) =>{
            state.artem = [...state.artem, {id: state.artem[state.artem.length - 1].id + 1, name: 'artem'}]
        },
        deleteOneArtem : (state, action) =>{
            state.artem = state.artem.filter((item)=>{
                return item.id !== action.payload.id
            })
        },
        changeName : (state, action) =>{
            state.name = action.payload
        }
    },
    extraReducers : {
        [getAllPosts.pending] : (state,action) => {
            state.status = 'loading'
        },
        [getAllPosts.rejected] : (state, action) => {
            state.status = 'rejected'
            state.cards = action.payload
        },
        [getAllPosts.fulfilled] : (state,action) => {
            state.status = 'success'
            state.cards = action.payload
        }
    }
})

export default products.reducer
export const {addOneForTest,addOneArtem,deleteOneArtem, changeName} = products.actions