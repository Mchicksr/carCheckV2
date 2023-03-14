import { FETCH_ALL, CREATE_COMMUNITY, CREATE_RULES } from "../constants/actionTypes";
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

export const createCommunity= (commData) => async (dispatch) => {
    try {
        const {data} = await api.createCommunity(commData)
        console.log('community',data)

        dispatch({type:CREATE_COMMUNITY,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const createRules = (id,rules) => async (dispatch) => {
    try {
        console.log('rules',rules)
        console.log('id',id)
        const {data} = await api.createRules(id,rules)
        dispatch({type:CREATE_RULES,payload:data})
        
    } catch (error) {
        console.log(error)
    }
}