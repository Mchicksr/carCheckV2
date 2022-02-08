import { GET_VIOLATION,CREATE_VIOLATION, DELETE_VIOLATION } from "../constants/actionTypes";
import * as api from '../api/index'

export const getViolations =  () => async (dispatch) => {
    try {
        const {data} = await api.fetchViolation()
        dispatch({type:GET_VIOLATION,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createViolation = (violationData) => async (dispatch) => {
    try {
        const {data} = await api.createViolation(violationData)
        dispatch({type:CREATE_VIOLATION,paylaod:data})
    } catch (error) {
        console.log(error)
    }
}

export const delteViolation = (id) => async (dispatch) => {
    try {
        await api.deleteViolation(id)
        dispatch({type:DELETE_VIOLATION})
    } catch (error) {
        console.log(error)
    }
}