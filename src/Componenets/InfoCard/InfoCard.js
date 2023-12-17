import React from "react";
import "./InfoCard.css";
const InfoCard = ({ title, buttonTitle, amount, backgroundColor }) => {
  return (
    <div className="card">
      <div className="Container">
        <div className="title">
          <span>{title}</span>
          <span
            style={{
              color: `${backgroundColor}`,
              fontSize: "20px",
              borderRadius: "20px",
            }}
          >
            ...
          </span>
        </div>
        <div className="Total">
          <span>{amount}</span>
        </div>
        <div className="Add">
          <button style={{ background: `${backgroundColor}` }}>
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
