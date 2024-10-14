import React, { useEffect } from "react";
import ComonBtn from "../buttons/ComonBtn";
import { useNavigate, useLocation } from "react-router-dom";
import FormDataWrapper from "../formdata/FormDatawrapper";

const CalculationForm = ({
  authorized,
  currentCalculation,
  getCalculationDataAsync,
  updateCalculationDataAsync,
  deleteCalculationAsync
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) navigate("/");
  });

  const handleBackBtnClick = () => navigate(-1);
  const { state } = useLocation();

  return (
    <div>
      <ComonBtn handleBtnClick={handleBackBtnClick}>Go back</ComonBtn>
      <FormDataWrapper
        currentCalculation={currentCalculation}
        id={state.id}
        getCalculationDataAsync={getCalculationDataAsync}
        updateCalculationDataAsync={updateCalculationDataAsync}
        deleteCalculationAsync={deleteCalculationAsync}
      />
    </div>
  );
};

export default CalculationForm;
