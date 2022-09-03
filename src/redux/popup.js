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
        }
    },

})


export default popup.reducer
export const {openPopup, changeStatus} =  popup.actions