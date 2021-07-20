import { SET_DATA_LOADED_TRUE } from "../actions/actions";  

export const dataStatusReducer = (state = false, action)=>{
    switch (action.type){
        case SET_DATA_LOADED_TRUE: {
            return true;
        }
    default:
        return state;
    }
}