import React from "react";
import Header from "../../Componenets/Header/Header";
import InfoCard from "../../Componenets/InfoCard/InfoCard";
import "./report.css";
import ProjectCatagories from "../../Componenets/ProjectCatagories/ProjectCatagories";
const Report = () => {
  return (
    <>
      <Header title="Report" />
      <div className="Reports">
        <InfoCard
          title="Total Projects"
          amount={50}
          buttonTitle="Add New Projects"
          backgroundColor="#ff103b"
        />
        <InfoCard
          title="Team size"
          buttonTitle="Add New Members"
          amount={16}
          backgroundColor="#29a03e"
        />
        <ProjectCatagories />
      </div>
    </>
  );
};

export default Report;
