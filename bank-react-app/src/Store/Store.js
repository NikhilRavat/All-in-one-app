import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Reducer/CounterReducer";
import banksReducer from "../Reducer/banksReducer";
import userReducer from "../Reducer/userReducer";
const reducer = combineReducers({
    counterReducer,
    banksReducer,
    userReducer
})

const store = configureStore({
    reducer,
})

export default store;