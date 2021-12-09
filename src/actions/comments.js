import { FETCH_COMMENTS, CREATE_COMMENTS } from "../constants/actionTypes";
import * as api from '../api/index'

export const getComments = () => async (dispatch) => {
    try {
        const {data} = await api.fetchComments()
        dispatch({type:FETCH_COMMENTS,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createComments = (commentData) => async (dispatch) => {
    try {
        const {data} = await api.createComments(commentData)
        dispatch({type:CREATE_COMMENTS,payload:data})
    } catch (error) {
        console.log(error)
    }
}