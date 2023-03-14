import { FETCH_CARS,CREATE_CARS,UPDATE, DELETE, GET_CAR, VIOLATION_LIST, GET_SAFELIST } from "../constants/actionTypes";
import * as api from '../api/index'

export const getCars = () => async (dispatch) => {
    try {
        const {data} = await api.fetchCars()
        dispatch({type:FETCH_CARS,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}
export const getCar = (searchTerm) => async (dispatch) => {
    try {
        const {data} = await api.getCar(searchTerm)
        dispatch({type:GET_CAR,payload:data})
        // console.log('checkACTION',data)
        
    } catch (error) {
        console.log(error)
    }
}

export const createCar = (carData) => async (dispatch) => {
    try {
        console.log('data1',carData)
        // console.log('data1',carData.violations_list)
       const newArr = [...carData.violations_list]
       const parsArr = []
       newArr.forEach(item => { 
        const updated = JSON.parse(item)
        parsArr.push(updated)
    })
    // console.log('hpe it works',parsArr)
    const updatedVio = {...carData, violations_list:parsArr}

    // console.log('money',updatedVio)


       
        const {data} = await api.createCars(updatedVio)
        // console.log('data',data)


        dispatch({type:CREATE_CARS,payload:data})
    } catch (error) {
        console.log(error)
        alert('Please choose the community')
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

export const violationList = (id,violations) => async (dispatch)=> {
    const parsedArray = []
    try {
         violations.forEach(item =>{
            const final = JSON.parse(item)
            parsedArray.push(final)
        })
        const {data} = await api.violationList(id,parsedArray)
        // console.log("PAAARSEDARR",parsedArray)
        dispatch({type:VIOLATION_LIST, payload:parsedArray})
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

// export const getSafeList = (id) => async (dispatch) =>{
//     try {
//         const {data} = await api.getSafeList(id)
//         console.log('action',data)
//         dispatch({type:GET_SAFELIST,payload:data})
//     } catch (error) {
//         console.log(error)
//     }
// }

export const deleteCar = (id) => async (dispatch) => {
    try {
        await api.deleteCar(id)
        dispatch({type:DELETE})
    } catch (error) {
        console.log(error)
    }
}

