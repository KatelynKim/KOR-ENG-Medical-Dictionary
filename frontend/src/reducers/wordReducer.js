import { SET_DATA, setData } from "../actions/actions";

const initialState = {
  data: [],
};

export const wordReducer = (state = initialState, action) => {
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
  dispatch(setData(data));
};
