import { GETVIOLATIONLIST,CREATEVIOLATIONLIST,DELETEVIOLATIONLIST } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const getViolationList = () => async (dispatch) => {
  
  try {
    const { data } = await api.getViolationArr();
    dispatch({ type: GETVIOLATIONLIST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const createNewViolation = (newViolation) => async (dispatch) => {
  try {
    console.log('violation2',newViolation)
    const { data } = await api.createViolationArr(newViolation);
    dispatch({ type: CREATEVIOLATIONLIST, payload: data });
  } catch (error) {
    console.log('violation1',newViolation)

    console.log(error.message);
  }
}

export const deleteViolationFromList = (id) => async (dispatch) => {
  try {
    await api.deleteViolationArr(id);
    dispatch({ type: 'DELETEVIOLATIONLIST', payload: id });
  } catch (error) {
    console.log(error.message);
  }
}

// export const createViolation = (newViolation) => async (dispatch) => {
//   console.log('violation2',newViolation)
// }
