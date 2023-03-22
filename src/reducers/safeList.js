import {GET_SAFELIST} from "../constants/actionTypes";

const safeList = (cars=[],action) =>{
    switch (action.type) {
        // case GET_SAFELIST:
        //         return cars.map((car)=> car._id === action.payload._id ? action.payload : action.payload)
        case GET_SAFELIST:
                return action.payload
        // case UPDATE_SAFELIST:
        //         console.log('click')
        //         const ans = action.payload === 0 ? 1 : action.payload === 1 ? 0 : 0
        //         console.log('ans',ans)
        //         return cars.map((car)=> car._id === action.payload._id ? ans : action.payload)
                // return ans
                

        default:
           return cars
    }
}

export default safeList