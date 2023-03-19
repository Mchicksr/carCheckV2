import { WEEKLY_CARS } from '../constants/actionTypes'
import * as api from '../api/index'

export const getWeeklyCars = (id,dates) => async (dispatch) => {
    try {
        // console.log('checkDates',dates)
        // console.log('para1',dates[0])
        // console.log('para2',dates[1])
        // console.log('id',id)
        const { data } = await api.weeklyCars(id,dates)
        console.log('dataa',data)
        dispatch({type:WEEKLY_CARS,payload:data})
    } catch (error) {
        console.log(error)
    }
}