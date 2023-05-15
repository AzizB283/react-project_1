import { combineReducers } from "redux";
import amountReducers from "./amountReducers";
import apiCallReducer from "./apiCallReducer";


const reducers = combineReducers({
    amount: amountReducers,
    data: apiCallReducer
})

export default reducers;