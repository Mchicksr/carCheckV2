import {FETCH_ALL, CREATE_COMMUNITY, CREATE_RULES,EDIT_RULES,DELETECOM} from '../constants/actionTypes'
const communities = (communities=[],action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE_COMMUNITY:
            return [...communities,action.payload]
        case CREATE_RULES:
                // return communities.filter((community) => community.community === action.payload.id ? action.payload : community)
                const createRules = action.payload.rules
                const newList = communities.map(community => {
                    console.log('action',action.payload)
                    if(action.payload.comId === community.comId){
                        console.log('communitycomId',community.comId)
                        return {...community, rules:createRules}
                    } else{
                        return community
                    }
                })
                return newList
        case DELETECOM:
                return communities.filter((community) => community._id !== action.payload)
        case EDIT_RULES:
            const newRules = action.payload.rules         
            const updateList = communities.map(community => {
                if (action.payload.id === community._id) {
                  return { ...community, rules: newRules };
                } else {
                  return community; // Keep the original community if the condition is not met
                }
              });
                return updateList
        default:
            return communities
    }
}


export default communities