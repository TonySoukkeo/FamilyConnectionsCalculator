import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    const { calculate, showResults } = this.props;

    let loading;

    if (calculate.monthlyHours !== "" && calculate.grossIncome !== "") {
      loading = (
        <div className="loaded-results">
          <h3>Monthly hours: {calculate.monthlyHours}</h3>
          <h3>
            Gross Income:{" "}
            <span style={{ color: "green" }}>${calculate.grossIncome}</span>{" "}
          </h3>
        </div>
      );
    } else {
      loading = (
        <div style={{ height: "300px" }}>
          <img style={{ width: "350px" }} src="/assets/loading.gif" alt="" />
        </div>
      );
    }

    return (
      <React.Fragment>
        {showResults ? (
          loading
        ) : (
          <div>
            <div className="d-none d-md-block m-auto pt-5">
              <p
                style={{
                  fontSize: "2rem"
                }}
              >
                Start Calculating :)
              </p>
              <br />
              <i
                style={{
                  color: "#41a805",
                  marginLeft: "70px",
                  paddingBottom: "55px"
                }}
                className="fas fa-arrow-circle-left fa-7x"
              />
            </div>

            <div className="d-block d-md-none m-auto">
              <p
                style={{
                  fontSize: "2rem"
                }}
              >
                Start Calculating :)
              </p>
              <br />
              <i
                style={{
                  color: "#41a805",
                  marginLeft: "70px"
                }}
                className="fas fa-arrow-circle-up fa-7x"
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapState = state => {
  return {
    calculate: state.calculate,
    showResults: state.calculate.showResults
  };
};

export default connect(mapState)(Results);
