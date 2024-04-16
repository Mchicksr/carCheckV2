import { CARRYLP,CLEAR_LP } from "../constants/actionTypes";

export const carryLP = (lp) => async (dispatch) => {
    try {
        dispatch({type:CARRYLP,payload:lp})
    } catch (error) {
        console.log(error)
    }
}

export const clearLP = () => async (dispatch) => {
    try {
        dispatch({type:CLEAR_LP})
    } catch (error) {
        console.log(error)
    }
}