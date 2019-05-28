import {
  CALCULATE_WEEKLY,
  CALCULATE_MONTHLY,
  CALCULATE_BI_WEEKLY,
  CALCULATE_BI_MONTHLY,
  CHANGE_CALC_TYPE,
  LOADED,
  SHOW_RESULTS,
  CALC_CREDITS
} from "./constants/CalculateConstants";

const initialState = {
  monthlyHours: "",
  grossIncome: "",
  showResults: "",
  calcType: "employment",
  loaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALCULATE_WEEKLY:
      return {
        ...state,
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome,
        calcType: "employment",
        showResults: true
      };

    case CALCULATE_MONTHLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome,
        calcType: "employment",
        showResults: true,
        loaded: action.payload.loaded
      };

    case CALCULATE_BI_WEEKLY:
      return {
        ...state,
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome,
        calcType: "employment",
        showResults: true,
        loaded: action.payload.loaded
      };
    case CALCULATE_BI_MONTHLY:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome,
        calcType: "employment",
        showResults: true,
        loaded: action.payload.loaded
      };
    case SHOW_RESULTS:
      return {
        ...state,
        showResults: action.payload,
        monthlyHours: "",
        grossIncome: ""
      };

    case CALC_CREDITS:
      return {
        monthlyHours: action.payload.monthlyHours,
        grossIncome: action.payload.grossIncome,
        calcType: "schooling",
        showResults: true,
        loaded: action.payload.loaded
      };

    case CHANGE_CALC_TYPE:
      return {
        ...state,
        loaded: false,
        showResults: false,
        calcType: action.payload
      };

    case LOADED:
      return {
        ...state,
        showResults: true,
        loaded: action.payload
      };

    default:
      return state;
  }
}
