import React, { Component } from "react";
import PayStatus from "./PayStatus";
import { connect } from "react-redux";
import {
  calcWeekly,
  calcMonthly,
  calcBiWeekly,
  calcBiMonthly,
  showResults
} from "../reducers/actions/CalculateActions";

class CalculatorForm extends Component {
  state = {
    clientPayStatus: "",
    numberOfHours: "",
    hourlyWage: ""
  };

  calculateSubmit = e => {
    e.preventDefault();

    const { clientPayStatus, numberOfHours, hourlyWage } = this.state,
      {
        calcWeekly,
        calcMonthly,
        calcBiWeekly,
        calcBiMonthly,
        showResults
      } = this.props;

    if (clientPayStatus === "" || numberOfHours === "" || hourlyWage === "") {
      alert("PLease fill out all forms");
    } else {
      if (clientPayStatus === "weekly") {
        showResults(true);
        setTimeout(
          function() {
            calcWeekly(numberOfHours, hourlyWage);
          }.bind(this),
          1000
        );
      } else if (clientPayStatus === "monthly") {
        showResults(true);
        setTimeout(
          function() {
            calcMonthly(numberOfHours, hourlyWage);
          }.bind(this),
          1000
        );
      } else if (clientPayStatus === "bi-weekly") {
        showResults(true);
        setTimeout(
          function() {
            calcBiWeekly(numberOfHours, hourlyWage);
          }.bind(this),
          1000
        );
      } else {
        showResults(true);
        setTimeout(
          function() {
            calcBiMonthly(numberOfHours, hourlyWage);
          }.bind(this),
          1000
        );
      }
    }

    setTimeout(
      function() {
        this.setState({
          clientPayStatus: "",
          numberOfHours: "",
          hourlyWage: ""
        });
      }.bind(this),
      2000
    );
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  payStateChange = status => this.setState({ clientPayStatus: status });

  render() {
    const { numberOfHours, hourlyWage, clientPayStatus } = this.state;

    return (
      <form onSubmit={this.calculateSubmit}>
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

        <button type="submit" className="btn btn-primary mt-3">
          Calculate
        </button>
      </form>
    );
  }
}

const actions = {
  calcWeekly,
  calcMonthly,
  calcBiWeekly,
  calcBiMonthly,
  showResults
};

export default connect(
  null,
  actions
)(CalculatorForm);
