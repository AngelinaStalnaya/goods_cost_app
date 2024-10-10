import React, { useEffect } from "react";
import ComonBtn from "../buttons/ComonBtn";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

const FormData = ({
  currentCalculation,
  handleEditBtn,
  id,
  getCalculationDataAsync,
  handleUpdateCalculation,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCalculationDataAsync(id));
  });

  return (
    <>
      <ul>
        <li>
          <Typography>Calculation name: {currentCalculation.name}</Typography>
          <ComonBtn handleBtnClick={handleEditBtn}>Edit</ComonBtn>
        </li>
        <li>
          <Typography>
            Time spent for the product: {currentCalculation.hours} hour
          </Typography>
          <ComonBtn handleBtnClick={handleEditBtn}>Edit</ComonBtn>
        </li>
        <li>
          <Typography>
            The cost of labour hour: {currentCalculation.payment} units / hour
          </Typography>
          <ComonBtn handleBtnClick={handleEditBtn}>Edit</ComonBtn>
        </li>
        <li>
          <Typography>
            Material costs for the product: {currentCalculation.materials} units
          </Typography>
          <ComonBtn handleBtnClick={handleEditBtn}>Edit</ComonBtn>
        </li>
        <li>
          <Typography>
            Delivery costs: {currentCalculation.delivery || 0} units
          </Typography>
          <ComonBtn handleBtnClick={handleEditBtn}>Edit</ComonBtn>
        </li>
        <li>
          <Typography>
            Packaging costs: {currentCalculation.packaging || 0}units
          </Typography>
          <ComonBtn handleBtnClick={handleEditBtn}>Edit</ComonBtn>
        </li>
        <li>
          <Typography>
            Tax rate: {currentCalculation.tax_rate || 0} %
          </Typography>
          <ComonBtn handleBtnClick={handleEditBtn}>Edit</ComonBtn>
        </li>
        <li>
          <Typography>
            Additional costs: {currentCalculation.additional_costs || 0} units
          </Typography>
          <ComonBtn handleBtnClick={handleEditBtn}>Edit</ComonBtn>
        </li>
        <li>
          <Typography>
            Costs on basic equipment usage: {currentCalculation.equipment || 0}{" "}
            units
          </Typography>
          <ComonBtn handleBtnClick={handleEditBtn}>Edit</ComonBtn>
        </li>
        <li>
          <Typography>
            Calculation date: {currentCalculation.date || 0}
          </Typography>
          <Typography>Will be updated in case of calculation edit</Typography>
        </li>
      </ul>

      <ComonBtn handleBtnClick={handleUpdateCalculation}>Save</ComonBtn>
      <ComonBtn>Cancel without save</ComonBtn>
    </>
  );
};

export default FormData;
// 801794 59854
