import { GET_VIOLATION,CREATE_VIOLATION, DELETE_VIOLATION } from "../constants/actionTypes";


const violations = (violations=[],action) => {
    switch(action.type){
        case GET_VIOLATION:
                return action.payload
        case CREATE_VIOLATION:
            return [...violations,action.payload]
        case DELETE_VIOLATION:
                return violations.filter((violation)=> violation._id === action.payload)

        default:
            return violations
    }
}

export default violations