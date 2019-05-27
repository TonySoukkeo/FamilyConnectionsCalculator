import React from "react";
import { connect } from "react-redux";

const Results = ({ calculate }) => {
  return (
    <div>
      {calculate && (
        <div>
          <h3>Monthly hours: {calculate.monthlyHours}</h3>
          <h3>
            Gross Income:{" "}
            <span style={{ color: "green" }}>${calculate.grossIncome}</span>{" "}
          </h3>
        </div>
      )}
    </div>
  );
};

const mapState = state => {
  return {
    calculate: state.calculate
  };
};

export default connect(mapState)(Results);
