import {
  CALCULATE_WEEKLY,
  CALCULATE_MONTHLY,
  CALCULATE_BI_WEEKLY,
  CALCULATE_BI_MONTHLY
} from "./constants/CalculateConstants";

const initialState = {
  monthlyHours: "",
  grossIncome: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_WEEKLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome
      };

    case CALCULATE_MONTHLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome
      };

    case CALCULATE_BI_WEEKLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome
      };
    case CALCULATE_BI_MONTHLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome
      };

    default:
      return initialState;
  }
}
