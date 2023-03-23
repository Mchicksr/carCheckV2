import {INDEX_TOTAL} from '../constants/actionTypes'

export const iTotal = (stats) => async (dispatch) => {
    try {
        dispatch({type:INDEX_TOTAL,payload:stats})
    } catch (error) {
        
    }
}