import React, { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Typography, Box, Divider, SvgIcon } from "@mui/material";
import IconBtn from "../buttons/IconBtn";
import * as Svgs from "../../images/svg/SvgIcons";
import Loader from '../loader/Loader';

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
        <Suspense fallback={<Loader />}>
        <ul className="calculation_data">
          <Typography
            sx={{fontSize: ["20px", "25px"], mb: "15px" }}
            className="section__header"
          >
            <SvgIcon
              component={Svgs.ListIcon}
              inheritViewBox
              className="basic__icon"
            />
            Current calculation info:{" "}
          </Typography>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              Calculation name: {currentCalculation.name}
            </Typography>
          </li>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              Time spent for the product: {currentCalculation.hours} hour(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              The cost of labour hour: {currentCalculation.payment} units / hour
            </Typography>
          </li>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              Material costs for the product: {currentCalculation.materials}{" "}
              units
            </Typography>
          </li>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              Delivery costs: {currentCalculation.delivery || 0} unit(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              Packaging costs: {currentCalculation.packaging || 0} unit(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              Tax rate: {currentCalculation.tax_rate || 0} %
            </Typography>
          </li>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              Additional costs: {currentCalculation.additional_costs || 0}{" "}
              unit(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              Costs on basic equipment usage:{" "}
              {currentCalculation.equipment || 0} unit(s)
            </Typography>
          </li>
          <li>
            <Typography sx={{fontSize: ["15px", "20px"], mb: "10px" }}>
              Calculation date: {currentCalculation.date || 0}
            </Typography>
          </li>
        </ul>
        </Suspense>
        <Suspense fallback={<Loader />}>
        <form
          id="update_calculation"
          className="form_updateCalculation"
          onSubmit={handleUpdateCalculation}
        >
          <Typography
            sx={{fontSize: ["15px", "20px"], mb: "15px" }}
            className="section__header"
          >
            <SvgIcon
              component={Svgs.EditIcon}
              inheritViewBox
              className="basic__icon"
            />
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

          <Typography sx={{ fontSize: "15px", width: "250px" }}>
            <SvgIcon
              component={Svgs.AlertIcon}
              inheritViewBox
              className="basic__icon"
            />
            In case of submit, calculation date will be updated automatically.
          </Typography>
        </form>
        </Suspense>
      </Box>
      <Divider />
      <Box>
      <Suspense fallback={<Loader />}>
        <div className="formdata_results">
          <Typography sx={{ fontSize: ["15px", "20px"]}}>
            Materials and work: {basicResult}
          </Typography>
          <Typography sx={{fontSize: ["15px", "20px"] }}>
            Additional costs: {additionalResult}
          </Typography>
          <Typography sx={{ fontSize: ["15px", "20px"] }}>
            Tax rate: {taxRate} (%)
          </Typography>
          <Typography className="totalCost" sx={{fontSize: ["25px", "35px"]  }}>
            Total: {totalCost || 0}{" "}
          </Typography>
        </div>
        </Suspense>
        <Divider sx={{mb: '10px'}}/>
        <IconBtn handleBtnClick={deleteCalculation} variant="contained">
          <SvgIcon component={Svgs.TrashIcon} inheritViewBox />
          <Typography sx={{fontSize: ["15px", "20px"] }}>
            Delete calculation
          </Typography>
        </IconBtn>
      </Box>
    </>
  );
};

export default FormDataComponent;
