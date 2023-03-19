import { WEEKLY_CARS } from '../constants/actionTypes'

const cIndex = (index=[],action) =>{

switch(action.type){
    case WEEKLY_CARS:
        console.log('ap',action.payload)
        return action.payload ? action.payload : index
        default:
            return index
    }
}

export default cIndex