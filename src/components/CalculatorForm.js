import React, { Component } from "react";
import PayStatus from "./PayStatus";
import { connect } from "react-redux";
import {
  calcWeekly,
  calcMonthly,
  calcBiWeekly,
  calcBiMonthly
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
      { calcWeekly, calcMonthly, calcBiWeekly, calcBiMonthly } = this.props;

    if (clientPayStatus === "" || numberOfHours === "" || hourlyWage === "") {
      alert("PLease fill out all forms");
    } else {
      if (clientPayStatus === "weekly") {
        calcWeekly(numberOfHours, hourlyWage);
      } else if (clientPayStatus === "monthly") {
        calcMonthly(numberOfHours, hourlyWage);
      } else if (clientPayStatus === "bi-weekly") {
        calcBiWeekly(numberOfHours, hourlyWage);
      } else {
        calcBiMonthly(numberOfHours, hourlyWage);
      }
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  payStateChange = status => this.setState({ clientPayStatus: status });

  render() {
    const { numberOfHours, hourlyWage } = this.state;

    return (
      <form onSubmit={this.calculateSubmit}>
        <p className="input-label">
          <span className="icon">
            <i className="fas fa-arrow-right fa-2x" />
          </span>{" "}
          <span className="label"> Select the client status</span>
        </p>
        <PayStatus payStateChange={this.payStateChange} />
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

const mapState = {
  calcWeekly,
  calcMonthly,
  calcBiWeekly,
  calcBiMonthly
};

export default connect(
  null,
  mapState
)(CalculatorForm);
