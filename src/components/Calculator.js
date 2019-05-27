import React, { Component } from "react";
import CalculatorForm from "./CalculatorForm";

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9 m-auto">
            <div id="calculator">
              <div className="card">
                <div className="card-body">
                  <CalculatorForm />
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
