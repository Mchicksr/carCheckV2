import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index'
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate()

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