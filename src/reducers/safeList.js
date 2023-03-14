import {GET_SAFELIST,UPDATE_SAFELIST } from "../constants/actionTypes";

const safeList = (cars=[],action) =>{
    switch (action.type) {
        // case GET_SAFELIST:
        //         return cars.map((car)=> car._id === action.payload._id ? action.payload : action.payload)
        case GET_SAFELIST:
                return action.payload
        case UPDATE_SAFELIST:
                // return cars.map((car)=> car._id === action.payload._id ? action.payload : action.payload)
                console.log('reducer',action.payload.safe)

        default:
           return cars
    }
}

export default safeList