import { CREATE_IMAGE, FETCH_IMAGE } from "../constants/actionTypes";

const image = (images=[],action) => {
    switch(action.type) {
        case FETCH_IMAGE:
            return action.paylaod
        case CREATE_IMAGE:
            return [...images,action.payload]
        default:
            return images
    }
}
export default image