import { DELETE_STICKER, FETCH_STICKERS, UPDATE_STICKER } from "../constants/actionTypes";
import * as api from '../api/index'


export const getStickers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchSticker()
        dispatch({type:FETCH_STICKERS,payload:data})
    } catch (error) {
        console.log(error.message)
    }
}
export const addSticker = (stickerData) => async (dispatch) => {
    try {
        const {data} = await api.sticker(stickerData)
        dispatch({type:UPDATE_STICKER,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteSticker = (id) => async (dispatch) => {
    try {
        await api.deleteSticker(id)
        dispatch({type:DELETE_STICKER})
    } catch (error) {
        console.log(error)
    }
}