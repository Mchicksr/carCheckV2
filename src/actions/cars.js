import { FETCH_CARS,CREATE_CARS,UPDATE, DELETE } from "../constants/actionTypes";
import * as api from '../api/index'

export const getCars = () => async (dispatch) => {
    try {
        const {data} = await api.fetchCars()
        dispatch({type:FETCH_CARS,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createCar = (carData) => async (dispatch) => {
    try {
        const {data} = await api.createCars(carData)
        dispatch({type:CREATE_CARS,payload:data})
    } catch (error) {
        console.log(error)
    }
} 

export const addViolation = (id,violation) => async (dispatch) =>{
try {
    const {data} = await api.addViolation(id,violation)
    dispatch({type:UPDATE, payload:data})
} catch (error) {
    console.log(error)
}
}

export const resetViolation = (id) => async (dispatch) => {
    try {
        const {data} = await api.resetViolation(id)
        dispatch({type:UPDATE, payload:data})
        alert('Violation reset')

    } catch (error) {
        console.log(error)
    }
}

export const verify = (id) => async (dispatch) => {
    try {
        const {data} = await api.verify(id)
        dispatch({type:UPDATE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteCar = (id) => async (dispatch) => {
    try {
        await api.deleteCar(id)
        dispatch({type:DELETE})
    } catch (error) {
        console.log(error)
    }
}

