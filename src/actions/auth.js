import { AUTH, USERACCESS, ADMINACCESS,LOGOUT2 } from '../constants/actionTypes'
import * as api from '../api/index'

export const signin = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);
        dispatch({type:AUTH,data})
        history.push('/')
        // navigate.push('/')
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}
export const signup = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData);
        dispatch({type:AUTH,data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const adminAccess = (user,admin) => async (dispatch) => {
    

    const data = {user,admin}
    dispatch({type:ADMINACCESS,data})
   
}

export const userAccess = (user) => async (dispatch) => {
        
        const data = {user}
        dispatch({type:USERACCESS,data})
}

export const logout2 = () => async (dispatch) => {
    dispatch({type:LOGOUT2})
}