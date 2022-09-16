import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import product from "./product";
import popup from "./popup";
import cards from "./cards";
import basket from "./basket";


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    product,
    popup,
    cards,
    basket
})
const reducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        reducer
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })

})


export const persistor = persistStore(store)
export default store
