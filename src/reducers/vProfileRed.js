import { GET_PROFILE,PHOTOID,CREATE_CARIMAGE } from "../constants/actionTypes";

const vProfile = (profile=[],action) => {
    switch (action.type) {
        case GET_PROFILE:
                const finalState = [...action.payload]
                return finalState
        case PHOTOID:
            const ans = [...profile,{photoId: action.payload}]
            return ans
        case CREATE_CARIMAGE:
            const ans1 = [...profile,{carImage: action.payload}]
            console.log('ans1',ans1)
            return ans1
        default:
           return profile
    }
}

export default vProfile