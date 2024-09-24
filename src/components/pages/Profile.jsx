import React, { useState } from "react";
import ComonBtn from "../buttons/ComonBtn";
import { Link } from "@mui/material";

const Profile = () => {
  const [calculationList, setCalculationList] = useState();

  let calculations = {};

  const allKeys = Object.keys(localStorage).filter((key) =>
    key.includes("project_")
  );

  const handleCalculationsList = () => {
    calculations = allKeys.map((key) => localStorage.getItem(key));

    setCalculationList(allKeys);
    console.log(...calculations);
    //   const additionalCosts = {
    //     delivery: lastCalculation.delivery,
    //     additional_costs: lastCalculation.additional_costs,
    //     equipment: lastCalculation.equipment,
    //   };

    //   const basicCosts = {
    //     hours: lastCalculation.hours,
    //     payment: lastCalculation.payment,
    //     materials: lastCalculation.materials,
    //     packaging: lastCalculation.packaging,
    //   };

    //   const taxRate = lastCalculation.tax_rate;
  };
  return (
    <div>
      <h1>Profile page</h1>
      {calculationList ? (
        <ul>
          {calculationList.map((item, index) => {
            return (<li key={index}>{item} <Link to='/calculation/:id'>See in details</Link></li>);
          })}
        </ul>
      ) : (
        <ComonBtn handleBtnClick={handleCalculationsList}>
          Show my calculations
        </ComonBtn>
      )}
    </div>
  );
};

export default Profile;
