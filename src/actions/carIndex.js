import { WEEKLY_CARS,GET_CAR_AMOUNT} from '../constants/actionTypes'
import * as api from '../api/index'

export const getWeeklyCars = (id,dates) => async (dispatch) => {
    try {
      
        const { data } = await api.weeklyCars(id,dates)
        // console.log('dataa',data)
        dispatch({type:WEEKLY_CARS,payload:data})
    } catch (error) {
        console.log(error)
    }
}

// export const getVioNum = (total) =>  (dispatch) =>{
//     try {
//         dispatch({type:GET_TOTAL_VIOLATIONS,payload:total.length})
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getCarAmount = (total,carNum) => async (dispatch) => {
    try {
        const stats = await {vioCount:total.length, carCount:carNum.length}
       await dispatch({type:GET_CAR_AMOUNT,payload:stats})
    } catch (error) {
        console.log(error)
    }

}