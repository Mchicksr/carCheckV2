import {GET_PROFILE,PHOTOID,CREATE_CARIMAGE} from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getProfile = (profile) => (dispatch) => {
    try {
        // console.log('bros',profile)

        dispatch({type:GET_PROFILE,payload:profile})
    } catch (error) {
        console.log(error)
    }
}

export const saveImageID = (id) => (dispatch) => {
    try {
        dispatch({type:PHOTOID,payload:id})
    } catch (error) {
        
    }
}

export const createCarImage = (id,car_image) => (dispatch) => {
    try {
        console.log('license_plate',id)
        console.log('car_image',car_image)
        const {data} = api.createCarImage(id,car_image)
        // const data = car_image
        console.log('data',data)
        dispatch({type:CREATE_CARIMAGE,payload:data.car_image})
    } catch (error) {
        console.log(error)
    }
}