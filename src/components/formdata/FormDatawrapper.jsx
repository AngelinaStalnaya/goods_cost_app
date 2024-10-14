import React, { useEffect } from "react";
import FormDataComponent from "./FormDataComponent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormDataWrapper = ({
  currentCalculation,
  id,
  getCalculationDataAsync,
  updateCalculationDataAsync,
  deleteCalculationAsync,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCalculationDataAsync(id));
  });

  const deleteCalculation = (e) => {
    e.preventDefault();
    dispatch(deleteCalculationAsync(id));
    navigate("/profile");
  };

  const handleUpdateCalculation = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const dataToPass = Array.from(data.entries()).reduce(
      (acc, [key, value]) => {
        if (value !== "") acc[key] = value;
        return acc;
      },
      {}
    );

    const updatedData = {
      ...dataToPass,
      _id: id,
    };

    dispatch(updateCalculationDataAsync(updatedData));
  };

  const basicResult =
    currentCalculation.hours * currentCalculation.payment +
    currentCalculation.packaging +
    currentCalculation.materials;
  const additionalResult =
    currentCalculation.delivery +
    currentCalculation.additional_costs +
    currentCalculation.equipment;
  const taxRate = currentCalculation.tax_rate;
  const totalCost =
    (basicResult + additionalResult) * (taxRate / 100) +
    basicResult +
    additionalResult;

  return (
    <FormDataComponent
      currentCalculation={currentCalculation}
      id={id}
      getCalculationDataAsync={getCalculationDataAsync}
      handleUpdateCalculation={handleUpdateCalculation}
      deleteCalculation={deleteCalculation}
      basicResult={basicResult}
      additionalResult={additionalResult}
      taxRate={taxRate}
      totalCost={totalCost}
    />
  );
};

export default FormDataWrapper;
