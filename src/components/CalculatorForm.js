import React, { Component } from "react";
import PayStatus from "./PayStatus";
import { connect } from "react-redux";
import {
  calcWeekly,
  calcMonthly,
  calcBiWeekly,
  calcBiMonthly,
  calcCredits,
  loaded,
  changeCalcType,
  showResults
} from "../reducers/actions/CalculateActions";

class CalculatorForm extends Component {
  state = {
    clientPayStatus: "",
    numberOfHours: "",
    hourlyWage: "",
    numberOfCredits: ""
  };

  calculateSubmit = e => {
    e.preventDefault();

    const {
        clientPayStatus,
        numberOfHours,
        hourlyWage,
        numberOfCredits
      } = this.state,
      {
        calcWeekly,
        calcMonthly,
        calcBiWeekly,
        calcBiMonthly,
        calcCredits,
        changeCalcType,
        showResults,
        calculate,
        loaded
      } = this.props;

    if (calculate.calcType === "employment") {
      if (clientPayStatus === "" || numberOfHours === "" || hourlyWage === "") {
        alert("Please fill out all fields.");
      } else {
        if (clientPayStatus === "weekly") {
          showResults(true);
          loaded(false);
          setTimeout(
            function() {
              loaded(true);
              calcWeekly(numberOfHours, hourlyWage);
            }.bind(this),
            1000
          );
        } else if (clientPayStatus === "monthly") {
          showResults(true);
          loaded(false);
          setTimeout(
            function() {
              loaded(true);
              calcMonthly(numberOfHours, hourlyWage);
            }.bind(this),
            1000
          );
        } else if (clientPayStatus === "bi-weekly") {
          showResults(true);
          loaded(false);
          setTimeout(
            function() {
              loaded(true);
              calcBiWeekly(numberOfHours, hourlyWage);
            }.bind(this),
            1000
          );
        } else {
          showResults(true);
          loaded(false);
          setTimeout(
            function() {
              loaded(true);
              calcBiMonthly(numberOfHours, hourlyWage);
            }.bind(this),
            1000
          );
        }
      }
    } else {
      showResults(true);
      loaded(false);
      setTimeout(
        function() {
          loaded(true);
          calcCredits(numberOfCredits);
        }.bind(this),
        1000
      );
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  payStateChange = status => this.setState({ clientPayStatus: status });

  changeDisplay = type => {
    const { changeCalcType } = this.props;
    changeCalcType(type);
  };

  render() {
    const {
        numberOfHours,
        hourlyWage,
        clientPayStatus,
        numberOfCredits,
        calcType
      } = this.state,
      { calculate } = this.props;

    let type;
    if (calculate.calcType === "employment") {
      type = (
        <div id="employment">
          <p className="input-label">Select pay frequency</p>
          <PayStatus
            clientPayStatus={clientPayStatus}
            payStateChange={this.payStateChange}
          />
          <div className="row">
            <div className="col-12 m-auto">
              <div className="input-group mt-5">
                <div className="input-group-prepend">
                  <span className="input-group-text">Number of hours</span>
                </div>
                <input
                  name="numberOfHours"
                  value={numberOfHours}
                  onChange={this.onChange}
                  type="number"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="input-group mt-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Hourly wage</span>
                </div>
                <input
                  name="hourlyWage"
                  value={hourlyWage}
                  onChange={this.onChange}
                  type="number"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      type = (
        <div id="school">
          <div className="input-group mt-5">
            <div className="input-group-prepend">
              <span className="input-group-text">Number of credits</span>
            </div>
            <input
              name="numberOfCredits"
              value={numberOfCredits}
              onChange={this.onChange}
              type="number"
              className="form-control form-control-lg"
            />
          </div>
        </div>
      );
    }

    return (
      <form onSubmit={this.calculateSubmit}>
        <div id="select-type">
          <div className="container">
            <div className="row">
              <div
                onClick={() => this.changeDisplay("employment")}
                className={
                  calculate.calcType === "employment"
                    ? "calc-type-employment-active"
                    : "calc-type-employment"
                }
              >
                <p>Employment</p>{" "}
              </div>
              <div
                onClick={() => this.changeDisplay("schooling")}
                className={
                  calculate.calcType === "schooling"
                    ? "calc-type-schooling-active"
                    : "calc-type-schooling"
                }
              >
                <p>Schooling</p>{" "}
              </div>
            </div>
          </div>
        </div>

        {type}

        <button type="submit" className="btn btn-primary mt-3 mb-4">
          Calculate
        </button>
      </form>
    );
  }
}

const mapState = state => {
  return {
    calculate: state.calculate
  };
};

const actions = {
  calcWeekly,
  calcMonthly,
  calcBiWeekly,
  calcBiMonthly,
  calcCredits,
  changeCalcType,
  showResults,
  loaded
};

export default connect(
  mapState,
  actions
)(CalculatorForm);
