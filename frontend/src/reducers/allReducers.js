import { wordReducer } from "./wordReducer";
import { dataStatusReducer } from "./dataStatusReducer";
import { combineReducers } from "redux"; 
import { routerReducer as routing } from 'react-router-redux';

const allReducers = combineReducers({
    wordReducer: wordReducer,
    dataStatusReducer: dataStatusReducer, 
    routing

});

export default allReducers;