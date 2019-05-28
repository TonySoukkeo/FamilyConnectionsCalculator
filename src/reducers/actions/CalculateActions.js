import {
  CALCULATE_WEEKLY,
  CALCULATE_MONTHLY,
  CALCULATE_BI_WEEKLY,
  CALCULATE_BI_MONTHLY,
  SHOW_RESULTS
} from "../constants/CalculateConstants";

const monthAndWeekRate = 4.33,
  biMonthlyRate = 2,
  biWeeklyRate1 = 2,
  biWeeklyRate2 = 2.15;

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
      showResults: true
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
      showResults: true
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
      showResults: true
    }
  };
};

export const showResults = value => {
  return {
    type: SHOW_RESULTS,
    payload: value
  };
};
