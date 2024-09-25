import React, { useState } from "react";
import ComonBtn from "../buttons/ComonBtn";
import { Link } from "react-router-dom";

const Profile = () => {
  const [calculationList, setCalculationList] = useState();

  const allKeys = Object.keys(localStorage)
    .filter((key) => key.includes("project_"))
    .map((key) => {
      return key.substring(8);
    })
    .sort();

  const handleCalculationsList = () => {
    setCalculationList(allKeys);
  };

  return (
    <div>
      <h1>Profile page</h1>
      {calculationList ? (
        <ul>
          {calculationList.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <Link to={`/calculation/${item}`}>See in details</Link>
              </li>
            );
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
