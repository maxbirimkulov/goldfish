import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import axios from "axios";

export const getAllCards = createAsyncThunk(
    'cards/getAllCards',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`http://localhost:4444/cards?category=${filter.category}&players=${filter.countPlayer.from}-${filter.countPlayer.to}&age=${filter.age.from}-${filter.age.to}&from=${filter.price.from}&to=${filter.price.to}`)
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
            countPlayer: {
                from: 1,
                to: 10
            },
            age: {
                from: 6,
                to: 20
            },
            price:{
                from:0,
                to:20000
            },
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
        },
        changeCountplayersFrom: (state, action)=> {
            state.filter.countPlayer = {
                    ...state.filter.countPlayer,
                    from: action.payload
            }
        },
        changeCountplayersTo: (state, action)=> {
            state.filter.countPlayer = {
                    ...state.filter.countPlayer,
                    to: action.payload

            }
        },
        changeAgeplayersTo: (state, action)=> {
            state.filter.age = {
                ...state.filter.age,
                to: action.payload

            }
        },
        changeAgeplayersFrom: (state, action)=> {
            state.filter.age = {
                ...state.filter.age,
                from: action.payload

            }
        },
        changePriceTo: (state, action)=> {
            state.filter.price = {
                ...state.filter.price,
                to: action.payload
            }
        },
        changePriceFrom: (state, action)=> {
            state.filter.price = {
                ...state.filter.price,
                from: action.payload
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

export const {changeCategory, changePriceTo,changePriceFrom, getCountPlayers, getAgePlayers, sortPricePlayers, getOnlySale, changeCountplayersTo, changeCountplayersFrom, changeAgeplayersTo, changeAgeplayersFrom} = cards.actions

