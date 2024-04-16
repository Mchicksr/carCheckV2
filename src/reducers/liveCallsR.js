import { CARRYLP, CLEAR_LP } from "../constants/actionTypes";
const str = (str = '', action) => {
switch (action.type) {
    case CARRYLP:
        return action.payload
    case CLEAR_LP:
        return ''
    default:
        return str
}
}
export default str;