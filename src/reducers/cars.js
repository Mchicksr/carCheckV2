import { FETCH_CARS,CREATE_CARS,UPDATE,DELETE } from "../constants/actionTypes";
 const cars = (cars=[],action) => {

    switch(action.type) {
        case FETCH_CARS:
            return action.payload
        case CREATE_CARS:
                return [...cars,action.payload]

        case UPDATE:
                return cars.map((car) => car._id === action.payload._id ? action.payload : car)
        case DELETE:
            return cars.filter((car)=> car._id !== action.payload)
        default:
            return cars
    }
}
export default cars