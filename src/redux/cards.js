import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import axios from "axios";

export const getAllCards = createAsyncThunk(
    'cards/getAllCards',
    async (_, {rejectWithValue}) => {
        try{
            const res = await axios('http://localhost:4444/cards')
            if (res.data.status !== 200){
                throw new Error('Server Error!')
            }
            return res.data
        }catch (err){
            return rejectWithValue(err.message)
        }
    }
)

export const cards = createSlice({

    name: 'cards',
    initialState: {
        cards: [],
        status: ''
    },
    reducers: {

    },
    extraReducers: {
        [getAllCards.pending] : (state, action) => {
            state.status =  'loading'
        },
        [getAllCards.rejected] : (state, action) => {
            state.status = 'rejected'
        },
        [getAllCards.fulfilled] : (state, action) => {
            state.status = 'success'
            state.cards = action.payload
        }
    }
})


export default cards.reducer



