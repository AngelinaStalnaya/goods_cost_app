import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Typography, Box, Divider } from "@mui/material";
import ComonBtn from "../buttons/ComonBtn";

const FormDataComponent = ({
  currentCalculation,
  id,
  getCalculationDataAsync,
  handleUpdateCalculation,
  deleteCalculation,
  basicResult,
  additionalResult,
  taxRate,
  totalCost,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCalculationDataAsync(id));
  });

  return (
    <>
      <Box className="formData">
        <ul className="calculation_data">
          <Typography
            sx={{ fontSize: "25px", mb: "15px" }}
            className="section__header"
          >
            Current calculation info:{" "}
          </Typography>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              Calculation name: {currentCalculation.name}
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              Time spent for the product: {currentCalculation.hours} hour(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              The cost of labour hour: {currentCalculation.payment} units / hour
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              Material costs for the product: {currentCalculation.materials}{" "}
              units
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              Delivery costs: {currentCalculation.delivery || 0} unit(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              Packaging costs: {currentCalculation.packaging || 0} unit(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              Tax rate: {currentCalculation.tax_rate || 0} %
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              Additional costs: {currentCalculation.additional_costs || 0}{" "}
              unit(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              Costs on basic equipment usage:{" "}
              {currentCalculation.equipment || 0} unit(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "25px", mb: "10px" }}>
              Calculation date: {currentCalculation.date || 0}
            </Typography>
          </li>
        </ul>
        <form
          id="update_calculation"
          className="form_updateCalculation"
          onSubmit={handleUpdateCalculation}
        >
          <Typography
            sx={{ fontSize: "25px", mb: "15px" }}
            className="section__header"
          >
            Update calculation data:
          </Typography>
          <input
            type="text"
            name="name"
            placeholder="New name:"
            className="input"
          />
          <input
            type="number"
            name="hours"
            placeholder="Time spent now: "
            className="input"
          />
          <input
            type="number"
            name="payment"
            placeholder="New labour cost: "
            className="input"
          />
          <input
            type="number"
            name="materials"
            placeholder="New material costs: "
            className="input"
          />
          <input
            type="number"
            name="delivery"
            placeholder="New delivery costs: "
            className="input"
          />
          <input
            type="number"
            name="packaging"
            placeholder="New packaging costs: "
            className="input"
          />
          <input
            type="number"
            name="tax_rate"
            placeholder="New tax rate: "
            className="input"
          />
          <input
            type="number"
            name="additional_costs"
            placeholder="New additional costs: "
            className="input"
          />
          <input
            type="number"
            name="equipment"
            placeholder="New equipment costs: "
            className="input"
          />
          <button type="submit" className="input__btn">
            Submit
          </button>
        </form>
      </Box>
      <Divider />
      <Box>
        <div className="formdata_results">
          <Typography sx={{ fontSize: "20px" }}>
            Materials and work: {basicResult}
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            Additional costs: {additionalResult}
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            Tax rate: {taxRate} (%)
          </Typography>
          <Typography className="totalCost" sx={{ fontSize: "35px" }}>
            Total: {totalCost || 0}{" "}
          </Typography>
        </div>
        <ComonBtn handleBtnClick={deleteCalculation} variant="contained">
          Delete calculation
        </ComonBtn>
      </Box>
    </>
  );
};

export default FormDataComponent;
