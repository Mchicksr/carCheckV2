import {  GET_SAFELIST,UPDATE_SAFELIST } from "../constants/actionTypes";
import * as api from '../api/index'

export const getSafeList = (id) => async (dispatch) =>{
    try {
        const {data} = await api.getSafeList(id)
        dispatch({type:GET_SAFELIST,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updateSafeStatus = (id,safe) => async (dispatch) => {
    try {
        
        const {data} = await api.updateSafe(id,safe)
        // const data = {id,safe}
        dispatch({type:UPDATE_SAFELIST, payload:data})
    } catch (error) {
        console.log(error)
    }
}