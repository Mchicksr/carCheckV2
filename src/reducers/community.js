import {FETCH_ALL, CREATE_COMMUNITY, CREATE_RULES} from '../constants/actionTypes'
const communities = (communities=[],action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE_COMMUNITY:
            return [...communities,action.payload]
        case CREATE_RULES:
                return communities.filter((community) => community.community === action.payload.id ? action.payload : community)
        default:
            return communities
    }
}


export default communities