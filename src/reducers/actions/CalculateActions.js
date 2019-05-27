import {
  CALCULATE_WEEKLY,
  CALCULATE_MONTHLY,
  CALCULATE_BI_WEEKLY,
  CALCULATE_BI_MONTHLY
} from "../constants/CalculateConstants";

export const calcWeekly = (hours, wage) => {
  return {
    type: CALCULATE_WEEKLY,
    payload: `${hours} ${wage}`
  };
};

export const calcMonthly = (hours, wage) => {
  return {
    type: CALCULATE_MONTHLY,
    payload: `${hours} ${wage}`
  };
};

export const calcBiMonthly = (hours, wage) => {
  return {
    type: CALCULATE_BI_MONTHLY,
    payload: `${hours} ${wage}`
  };
};

export const calcBiWeekly = (hours, wage) => {
  return {
    type: CALCULATE_BI_WEEKLY,
    payload: `${hours} ${wage}`
  };
};
