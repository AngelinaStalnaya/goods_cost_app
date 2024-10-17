import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import Profile from "./Profile";
import Error from "./Error";
import CalculationForm from "./CalculationForm";
import SignUpWrapper from "../signup/SignUpWrapper";
import LoginWrapper from "../login/LoginWrapper";

const RoutesComponent = ({
  authorized,
  userName,
  userCalculations,
  currentCalculation,
  userId
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Calculator authorized={authorized} userName={userName} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              authorized={authorized}
              userCalculations={userCalculations}
              userName={userName}
            />
          }
        />
        <Route
          path="/calculation/:projectName"
          element={
            <CalculationForm
              authorized={authorized}
              currentCalculation={currentCalculation}
              userId={userId}
            />
          }
        />
        <Route
          path="/signup"
          element={<SignUpWrapper />}
        />
        <Route
          path="/login"
          element={<LoginWrapper/>}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
