import {UPDATE_STICKER,FETCH_STICKERS,DELETE_STICKER} from '../constants/actionTypes'

const sticker = (stickers=[],action) => {
    switch(action.type){
        case FETCH_STICKERS:
                return action.payload
        case UPDATE_STICKER:
            return [...stickers,action.payload]
        case DELETE_STICKER:
            return stickers.filter((sticker)=> sticker._id !== action.payload)
        default:
            return stickers
    }
}

export default sticker