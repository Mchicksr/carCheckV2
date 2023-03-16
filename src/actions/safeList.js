import {  GET_SAFELIST,UPDATE_SAFELIST } from "../constants/actionTypes";
import * as api from '../api/index'

export const getSafeList = (id) => async (dispatch) =>{
    try {
        console.log('travel',id)
        const {data} = await api.getSafeList(id)
        dispatch({type:GET_SAFELIST,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updateSafeStatus = (id,safe) => async (dispatch) => {
    try {
        console.log('safeID',id)
        console.log('safeupdates',safe)
        const {data} = await api.updateSafe(id,safe)
        // const data = {id,safe}
        console.log('wtf',data)
        dispatch({type:UPDATE_SAFELIST, payload:data})
    } catch (error) {
        console.log(error)
    }
}