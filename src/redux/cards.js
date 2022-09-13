import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import axios from "axios";

export const getAllCards = createAsyncThunk(
    'cards/getAllCards',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`http://localhost:4444/cards?category=${filter.category}&players=${filter.countPlayer}&age=${filter.getAge}&sale=${filter.sale}`)
            console.log(filter)
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
            countPlayer: '',
            getAge: '',
            sale: '',
            from: 0
        }
    },
    reducers: {
        changeCategory: (state, action) =>{
            state.filter = {
                ...state.filter,
                category: action.payload
            }
        },
        getCountPlayers: (state, action) =>{
            state.filter = {
                ...state.filter,
                countPlayer: action.payload
            }
        },
        getAgePlayers: (state, action) =>{
            state.filter = {
                ...state.filter,
                getAge: action.payload
            }
        },
        sortPricePlayers: (state, action) =>{
            state.filter = {
                ...state.filter,
                from: action.payload
            }
        },
        getOnlySale: (state, action) =>{
            state.filter = {
                ...state.filter,
                sale: action.payload
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

export const {changeCategory, getCountPlayers, getAgePlayers, sortPricePlayers, getOnlySale} = cards.actions

