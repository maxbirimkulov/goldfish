import {createSlice} from "@reduxjs/toolkit";


const popup = createSlice({
    name: 'popup',
    initialState: {
       active: false,
       status: 'login'
    },
    reducers: {
        openPopup : (state, action) => {
            state.active = true
        },
        changeStatus : (state, action) => {
            state.status = action.payload
        },
        closePopup : (state, action) => {
            state.active = false
        },
    },

})


export default popup.reducer
export const {openPopup, changeStatus, closePopup} =  popup.actions