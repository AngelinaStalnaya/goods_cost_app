import React, { useEffect } from "react";
import FormData from "./FormData";
import { useDispatch } from "react-redux";

const FormDataWrapper = ({
  currentCalculation,
  id,
  getCalculationDataAsync,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCalculationDataAsync(id));
  });

  const handleEditBtn = (currentData) => {
    
  };

  const handleUpdateCalculation = async () => {};

  return (
    <FormData
      currentCalculation={currentCalculation}
      id={id}
      getCalculationDataAsync={getCalculationDataAsync}
      handleEditBtn={handleEditBtn}
      handleUpdateCalculation={handleUpdateCalculation}
    />
  );
};

export default FormDataWrapper;
