import {INDEX_TOTAL} from '../constants/actionTypes'

const indexTotal = (index=[], action) =>{
    switch(action.type){
        case INDEX_TOTAL:
            return action.payload ? action.payload : index
        default:
            return index
    }
}

export default indexTotal