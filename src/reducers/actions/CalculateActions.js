import {
  CALCULATE_WEEKLY,
  CALCULATE_MONTHLY,
  CALCULATE_BI_WEEKLY,
  CALCULATE_BI_MONTHLY,
  CALC_CREDITS,
  LOADED,
  CHANGE_CALC_TYPE,
  SHOW_RESULTS
} from "../constants/CalculateConstants";

const monthAndWeekRate = 4.33,
  biMonthlyRate = 2,
  biWeeklyRate1 = 2,
  biWeeklyRate2 = 2.15,
  schoolMonthlyRate = 4.33,
  schoolAuthorizationRate = 3;

export const calcWeekly = (hours, wage) => {
  const hoursPerWeek = Number(hours).toFixed(2),
    hourlyWage = Number(wage).toFixed(2),
    monthlyHours = (hoursPerWeek * monthAndWeekRate).toFixed(2),
    grossIncome = (hoursPerWeek * hourlyWage * monthAndWeekRate).toFixed(2);

  return {
    type: CALCULATE_WEEKLY,
    payload: {
      monthlyHours,
      grossIncome,
      showResults: true
    }
  };
};

export const calcMonthly = (hours, wage) => {
  const hoursPerWeek = Number(hours).toFixed(2),
    hourlyWage = Number(wage).toFixed(2),
    monthlyHours = (hoursPerWeek * monthAndWeekRate).toFixed(2),
    grossIncome = (hoursPerWeek * hourlyWage * monthAndWeekRate).toFixed(2);

  return {
    type: CALCULATE_MONTHLY,
    payload: {
      monthlyHours,
      grossIncome,
      showResults: true,
      loaded: true
    }
  };
};

export const calcBiMonthly = (hours, wage) => {
  const hoursPerWeek = Number(hours).toFixed(2),
    hourlyWage = Number(wage).toFixed(2),
    monthlyHours = (hoursPerWeek * biMonthlyRate * biMonthlyRate).toFixed(2),
    grossIncome = (
      hoursPerWeek *
      hourlyWage *
      biMonthlyRate *
      biMonthlyRate
    ).toFixed(2);
  return {
    type: CALCULATE_BI_MONTHLY,
    payload: {
      monthlyHours,
      grossIncome,
      showResults: true,
      loaded: true
    }
  };
};

export const calcBiWeekly = (hours, wage) => {
  const hoursPerWeek = Number(hours).toFixed(2),
    hourlyWage = Number(wage).toFixed(2),
    monthlyHours = (hoursPerWeek * biWeeklyRate1 * biWeeklyRate2).toFixed(2),
    grossIncome = (
      hoursPerWeek *
      hourlyWage *
      biWeeklyRate1 *
      biWeeklyRate2
    ).toFixed(2);
  console.log(hoursPerWeek, hourlyWage);
  return {
    type: CALCULATE_BI_WEEKLY,
    payload: {
      monthlyHours,
      grossIncome,
      showResults: true,
      loaded: true
    }
  };
};

export const showResults = value => {
  return {
    type: SHOW_RESULTS,
    payload: value
  };
};

export const calcCredits = credits => {
  const credit = Number(credits),
    monthlyHours = (credit * schoolMonthlyRate).toFixed(2),
    authorizationHours = (credits * schoolAuthorizationRate).toFixed(2);
  return {
    type: CALC_CREDITS,
    payload: {
      monthlyHours,
      grossIncome: authorizationHours,
      loaded: true
    }
  };
};

export const changeCalcType = type => {
  return {
    type: CHANGE_CALC_TYPE,
    payload: type
  };
};

export const loaded = value => {
  return {
    type: LOADED,
    payload: value
  };
};
