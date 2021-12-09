import {FETCH_COMMENTS,CREATE_COMMENTS } from "../constants/actionTypes";

const comments = (comments=[],action) => {
    switch(action.type) {
        case FETCH_COMMENTS:
            return action.payload 
        case CREATE_COMMENTS:
            return [...comments,action.payload]
        default:
            return comments
    }
}

export default comments