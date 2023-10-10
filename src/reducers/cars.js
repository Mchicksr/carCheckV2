import { FETCH_CARS, CREATE_CARS, UPDATE, DELETE, GET_CAR, VIOLATION_LIST, GET_SAFELIST, UPDATE_SAFELIST, DELETE_VIOLATION_AT, SHOW_IMAGE, REFETCHCARIMAGE,CLEAR_CAR } from "../constants/actionTypes";
const cars = (cars = [], action) => {

    switch (action.type) {
        case FETCH_CARS:
            return action.payload
        case GET_CAR:
            // console.log('AP',action.payload)
            return action.payload

        case CREATE_CARS:
            return [...cars, action.payload]
        case CLEAR_CAR:
            return []
        case UPDATE:
            return cars.map((car) => car._id === action.payload._id ? action.payload : car)
        case VIOLATION_LIST:
            return action.payload ? action.payload : cars
        case DELETE_VIOLATION_AT:
            const findIndex = action.payload.indexNum.index;
            console.log('findIndex', findIndex);
            const updatedCars = cars.map(car => {
                const updatedViolations = car.violations_list.filter(
                    (violation, index) => index != findIndex
                );

                return {
                    ...car,
                    violations_list: updatedViolations
                };
            });

            console.log('updatedCars', updatedCars);
            // Now you can return the updatedCars or dispatch them to Redux, depending on your implementation
            return updatedCars;
        case GET_SAFELIST:
            // console.log('reducer',action.payload)
            return cars.map((car) => car._id === action.payload._id ? action.payload : car)
        case UPDATE_SAFELIST:
            let ans = 0
            if (action.payload.safe === 1) {
                ans = 1
            } else if (action.payload.safe === 0) {
                ans = 0
            }

            return cars.map((car) => car._id === action.payload.id ? { ...car, safe: ans } : action.payload)
        case SHOW_IMAGE:

            const showAns = cars[0].car_image.push(action.payload.car_image)
        // return showAns

        case DELETE:
            return cars.filter((car) => car._id !== action.payload)
            case REFETCHCARIMAGE:
                return action.payload
        default:
            return cars
    }
}
export default cars