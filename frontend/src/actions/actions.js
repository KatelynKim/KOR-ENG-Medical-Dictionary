
export const SET_DATA = "SET_DATA"; 
export const SET_DATA_LOADED_TRUE = "SET_DATA_LOADED_TRUE"

export const setData = (data) => ({
    type: "SET_DATA",
    payload: data
})

export const setDataLoadedTrue = (dataLoaded) => ({
    type: "SET_DATA_LOADED_TRUE",
    payload: true
})