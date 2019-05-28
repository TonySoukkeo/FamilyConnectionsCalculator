import React from "react";

const status = [
  {
    id: 1,
    name: "Weekly"
  },
  {
    id: 2,
    name: "Monthly"
  },
  {
    id: 3,
    name: "Bi-Weekly"
  },
  {
    id: 4,
    name: "Bi-Monthly"
  }
];

const PayStatus = ({ payStateChange, clientPayStatus }) => {
  return (
    <div className="row ">
      <div className="m-auto">
        {status.map(x => (
          <span
            key={x.id}
            onClick={() => payStateChange(x.name.toLowerCase())}
            className={
              clientPayStatus === x.name.toLowerCase()
                ? "btn btn-success mr-2"
                : "btn btn-outline-success mr-2"
            }
          >
            {x.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PayStatus;
