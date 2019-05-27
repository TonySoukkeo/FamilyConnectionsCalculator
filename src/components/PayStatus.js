import React from "react";

const PayStatus = ({ payStateChange }) => {
  return (
    <div className="row ">
      <div className="m-auto">
        <span
          onClick={() => payStateChange("weekly")}
          className="btn btn-primary mr-2"
        >
          Weekly
        </span>
        <span
          onClick={() => payStateChange("monthly")}
          name="monthly"
          className="btn btn-primary mr-2"
        >
          Monthly
        </span>
        <span
          onClick={() => payStateChange("bi-weekly")}
          name="bi-weekly"
          className="btn btn-primary mr-2"
        >
          Bi-Weekly
        </span>
        <span
          onClick={() => payStateChange("bi-monthly")}
          name="bi-monthly"
          className="btn btn-primary"
        >
          Bi-Monthly
        </span>
      </div>
    </div>
  );
};

export default PayStatus;
