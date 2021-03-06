import { FETCH_ALL } from "../constants/actionTypes";
import * as api from '../api/index'

export const getCommunities = () => async (dispatch) => {
    try {
        const {data} = await api.fetchCommunity()
        // console.log('community',data)
        dispatch({type:FETCH_ALL,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}