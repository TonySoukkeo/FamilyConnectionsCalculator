import {
  CALCULATE_WEEKLY,
  CALCULATE_MONTHLY,
  CALCULATE_BI_WEEKLY,
  CALCULATE_BI_MONTHLY
} from "./constants/CalculateConstants";

const initialState = {
  total: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_WEEKLY:
      return {
        total: action.payload
      };

    case CALCULATE_MONTHLY:
      return {
        total: action.payload
      };

    case CALCULATE_BI_WEEKLY:
      return {
        total: action.payload
      };
    case CALCULATE_BI_MONTHLY:
      return {
        total: action.payload
      };

    default:
      return initialState;
  }
}
