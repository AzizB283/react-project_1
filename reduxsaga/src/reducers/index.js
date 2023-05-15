import { combineReducers } from "redux";
import update from "./update";

const reducers = combineReducers({
    update: update
})

export default reducers;