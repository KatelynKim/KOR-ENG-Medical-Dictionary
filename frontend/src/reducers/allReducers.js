import { wordReducer } from "./wordReducer";
import { dataStatusReducer } from "./dataStatusReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    wordReducer: wordReducer,
    dataStatusReducer: dataStatusReducer
});

export default allReducers;