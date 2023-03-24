import { FETCH_CARS,CREATE_CARS,UPDATE,DELETE,GET_CAR, VIOLATION_LIST, GET_SAFELIST, UPDATE_SAFELIST } from "../constants/actionTypes";
 const cars = (cars=[],action) => {

    switch(action.type) {
        case FETCH_CARS:
            return action.payload
        case GET_CAR:
            // console.log('AP',action.payload)
            return action.payload

        case CREATE_CARS:
                return [...cars,action.payload]

        case UPDATE:
                return cars.map((car) => car._id === action.payload._id ? action.payload : car)
        case VIOLATION_LIST:
                return action.payload ? action.payload : cars
        case GET_SAFELIST:
            // console.log('reducer',action.payload)
                return cars.map((car)=> car._id === action.payload._id ? action.payload : car)
        case UPDATE_SAFELIST:
            let ans = 0
            if(action.payload.safe === 1){
                ans = 1 
            } else if(action.payload.safe === 0){
                ans = 0
            }
           
            return cars.map((car)=> car._id === action.payload.id ?{...car, safe:ans}: action.payload)
        case DELETE:
            return cars.filter((car)=> car._id !== action.payload)
        default:
            return cars
    }
}
export default cars