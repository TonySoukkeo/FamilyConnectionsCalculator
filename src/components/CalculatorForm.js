import React, { Component } from "react";

class CalculatorForm extends Component {
  state = {
    clientPayStatus: ""
  };

  payStateChange = status => this.setState({ clientPayStatus: status });

  render() {
    const { clientPayStatus } = this.state;

    return (
      <form>
        <p className="input-label">
          <span className="icon">
            <i className="fas fa-arrow-right fa-2x" />
          </span>{" "}
          <span className="label"> Select the client status</span>
        </p>

        <div className="row ">
          <div className="m-auto">
            <span
              onClick={() => this.payStateChange("weekly")}
              className="btn btn-primary mr-2"
            >
              Weekly
            </span>
            <span
              onClick={() => this.payStateChange("monthly")}
              name="monthly"
              className="btn btn-primary mr-2"
            >
              Monthly
            </span>
            <span
              onClick={() => this.payStateChange("bi-weekly")}
              name="bi-weekly"
              className="btn btn-primary mr-2"
            >
              Bi-Weekly
            </span>
            <span
              onClick={() => this.payStateChange("bi-monthly")}
              name="bi-monthly"
              className="btn btn-primary"
            >
              Bi-Monthly
            </span>
          </div>
        </div>
      </form>
    );
  }
}

export default CalculatorForm;
