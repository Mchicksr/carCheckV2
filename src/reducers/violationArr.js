import { GETVIOLATIONLIST, CREATEVIOLATIONLIST,DELETEVIOLATIONLIST } from "../constants/actionTypes";

const violationArr = (violationArr = [], action) => {
  switch (action.type) {
    case GETVIOLATIONLIST:
      return action.payload;

    case CREATEVIOLATIONLIST:
      return [...violationArr, action.payload];

    default:
      return violationArr;
      case DELETEVIOLATIONLIST:
        return violationArr.filter((violation) => violation._id !== action.payload);
  }
};

export default violationArr;