import { FETCH_ALL, CREATE_COMMUNITY, CREATE_RULES,DELETECOM,EDIT_RULES } from "../constants/actionTypes";
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
        // console.log('community',data)

        dispatch({type:CREATE_COMMUNITY,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const createRules = (id,rules,comId) => async (dispatch) => {
    try {
        // console.log('rules2',rules)
        // console.log('id2',id)
        // console.log('comID',comId)
        const {data} = await api.createRules(id,rules)
        const newData = {comId,rules}
        dispatch({type:CREATE_RULES,payload:newData})
        alert('Rules created')
        
    } catch (error) {
        console.log(error)
        alert('something went wrong contact Developer')
    }
}

export const editCRules = (id,rules) => async (dispatch) => {
    try {
        const pluginData = {rules:rules}
       const {data} = await api.editCommunityRules(id,pluginData)
         const updateData = {id,rules}
        dispatch({type:EDIT_RULES,payload:updateData})
    } catch (error) {
        console.log(error)
    }
}

export const deleteCommunity = (id) => async (dispatch) => {
    try {
        await api.removeCommunity(id)
        dispatch({type:DELETECOM,payload:id})
    } catch (error) {
        console.log(error)
    }
}