import { FETCH_IMAGE,CREATE_IMAGE } from "../constants/actionTypes";
import * as api from '../api/index'
export const getImage = () => async (dispatch) => {
    try {
        const {data} = await api.fetchImage()
        dispatch({type:FETCH_IMAGE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const createImage = (imageData) => async (dispatch) => {
    try{
        const {data} = await api.createImage(imageData)
        dispatch({type:CREATE_IMAGE,payload:data})
    } catch(error){
        console.log(error)
    }
}