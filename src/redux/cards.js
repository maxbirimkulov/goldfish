import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import axios from "axios";

export const getAllCards = createAsyncThunk(
    'cards/getAllCards',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`http://localhost:4444/cards?age=${filter.playCount}`)
            if (res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)



export const cards = createSlice({

    name: 'cards',
    initialState: {
        cards: [],
        status: '',
        error:'',
        filter: {
            category:'',
            playCount: ''

        }
    },
    reducers: {
        changeCategory: (state, action) =>{
            state.filter = {
                ...state.filter,
                category: action.payload
            }

        },
        amountCount: (state, action) => {
            state.filter = {
                ...state.filter,
                playCount: action.payload
            }
        }
    },
    extraReducers: {
        [getAllCards.pending] : (state, action) => {
            state.status =  'loading'
        },
        [getAllCards.fulfilled] : (state, action) => {
            state.status = 'success'
            state.cards = action.payload
        },
        [getAllCards.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

    }
})


export default cards.reducer

export const {changeCategory, amountCount} = cards.actions

