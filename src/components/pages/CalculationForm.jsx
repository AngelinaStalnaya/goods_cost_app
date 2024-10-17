import React, { useEffect } from "react";
import ComonBtn from "../buttons/ComonBtn";
import { useNavigate } from "react-router-dom";
import FormDataWrapper from "../formdata/FormDatawrapper";

const CalculationForm = ({ authorized, currentCalculation, userId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) navigate("/");
  });

  const handleBackBtnClick = () => navigate(-1);

  return (
    <div>
      <ComonBtn handleBtnClick={handleBackBtnClick} variant="contained">
        Go back
      </ComonBtn>
      <FormDataWrapper currentCalculation={currentCalculation} id={userId} />
    </div>
  );
};

export default CalculationForm;
