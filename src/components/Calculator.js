import React, { Component } from "react";
import CalculatorForm from "./CalculatorForm";
import Results from "./results/Results";

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div id="calculator">
              <div className="card">
                <div className="card-body">
                  <CalculatorForm />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div id="results">
              <div className="card">
                <div className="card-body">
                  <Results />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
