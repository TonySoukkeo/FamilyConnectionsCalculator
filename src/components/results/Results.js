import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    const { calculate, showResults } = this.props;

    let loading;

    if (calculate.loaded) {
      loading = (
        <div className="loaded-results">
          <span
            style={{
              fontSize: "1.7rem"
            }}
          >
            Monthly hours:
          </span>{" "}
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "bold"
            }}
          >
            {" "}
            {calculate.monthlyHours}
          </span>
          <div
            style={{
              marginTop: "30px"
            }}
          >
            <span
              style={{
                fontSize: "1.7rem"
              }}
            >
              {calculate.calcType === "employment"
                ? "Gross Income: "
                : "Authorization hours: "}
            </span>
            <span
              style={{
                color: "green",
                fontWeight: "bold",
                fontSize: "2rem"
              }}
            >
              {calculate.calcType === "employment" ? "$" : ""}
              {calculate.grossIncome}
            </span>{" "}
          </div>
        </div>
      );
    } else {
      loading = (
        <div style={{ height: "300px", paddingTop: "50px" }}>
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
            <div
              style={{
                paddingTop: "90px"
              }}
              className="d-none d-md-block m-auto"
            >
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
