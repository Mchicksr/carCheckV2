import { WEEKLY_CARS,GET_CAR_AMOUNT } from '../constants/actionTypes'

const cIndex = (index=[],action) =>{

switch(action.type){
    case WEEKLY_CARS:
        return action.payload ? action.payload : index
            
    case GET_CAR_AMOUNT:
        const amount = [...index, {amount:action.payload}]
        // const amount = ...index, {ammount: action.payload}
        // console.log('amount',amount)
            return  action.payload ? amount : index
            // return  index
            
        default:
            return index
    }
}

export default cIndex