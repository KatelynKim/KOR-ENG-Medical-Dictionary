import { SET_DATA, setData, setDataLoadedTrue} from "../actions/actions";    


export const wordReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DATA: {
      return { ...state, data: action.payload };
    }   
    default:
      return state;
  }
};

export const loadData = () =>async (dispatch, getState) => {  
  const data = await fetch("http://127.0.0.1:8000/api/").then((res) =>
    res.json() 
  ); 
  console.log(data)
  dispatch(setData(data));
  dispatch(setDataLoadedTrue()); 

};

