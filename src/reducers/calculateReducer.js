import {
  CALCULATE_WEEKLY,
  CALCULATE_MONTHLY,
  CALCULATE_BI_WEEKLY,
  CALCULATE_BI_MONTHLY,
  SHOW_RESULTS
} from "./constants/CalculateConstants";

const initialState = {
  monthlyHours: "",
  grossIncome: "",
  showResults: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_WEEKLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome,
        showResults: true
      };

    case CALCULATE_MONTHLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome,
        showResults: true
      };

    case CALCULATE_BI_WEEKLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome,
        showResults: true
      };
    case CALCULATE_BI_MONTHLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome,
        showResults: true
      };
    case SHOW_RESULTS:
      return {
        showResults: action.payload,
        monthlyHours: "",
        grossIncome: ""
      };

    default:
      return state;
  }
}
