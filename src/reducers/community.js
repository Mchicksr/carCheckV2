import {FETCH_ALL} from '../constants/actionTypes'
const communities = (communities=[],action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload
        default:
            return communities
    }
}
export default communities