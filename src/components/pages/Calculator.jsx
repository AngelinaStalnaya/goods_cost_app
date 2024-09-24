import React from "react";
import { useState } from "react";
import {
  Typography,
  Input,
  InputLabel,
  FormGroup,
  Divider,
  Box,
  Modal,
} from "@mui/material";
import ComonBtn from "../buttons/ComonBtn";

const Calculator = () => {
  const basicCostInitialState = {
    hours: "",
    payment: "",
    materials: "",
    packaging: "",
  };

  const [basicCost, setBasicCost] = useState(basicCostInitialState);

  const handleBasicCalcInput = (event) => {
    const { name, value } = event.target;
    setBasicCost((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const additionalCostsInitialState = {
    delivery: "",
    additional_costs: "",
    equipment: "",
  };
  const [additionalCost, setAdditionalCost] = useState(
    additionalCostsInitialState
  );

  const handleAdditionalCalcInput = (event) => {
    const { name, value } = event.target;
    setAdditionalCost((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const taxRateInitialState = {
    tax_rate: "",
  };
  const [taxRate, setTaxRate] = useState(taxRateInitialState);
  const handleTaxInput = (event) => {
    const { name, value } = event.target;
    setTaxRate((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    setTaxRate(event.target.value);
  };

  const additionalCostsCalculations = (obj) => {
    const values = Object.values(obj);

    const calculation = values.reduce(function (currSum, currNum) {
      return Number(currSum) + Number(currNum);
    }, 0);
    return calculation;
  };
  const additionalResult = additionalCostsCalculations(additionalCost);

  const basicCostsCalculations = (obj) => {
    let calculation = obj.payment * obj.hours;
    calculation += Number(obj.packaging) || 0;
    calculation += Number(obj.materials) || 0;
    return calculation;
  };
  const basicResult = basicCostsCalculations(basicCost);

  const totalCost =
    (basicResult + additionalResult) * (taxRate / 100) +
    basicResult +
    additionalResult;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [calculationName, setCalculationName] = useState("");
  const handleSetCalculationName = (event) => {
    setCalculationName(event.target.value);
  };

  // const getUserSavedCalculations = () => {
  //   const userCalculations = localStorage.getItem("user");
  //   if (userCalculations) {
  //     JSON.parse(userCalculations);
  //   }
  //   return userCalculations | {};
  // };

  // const setUserSavedCalculations = (userState, addState) => {

  //   const newState = {
  //     ...userState?.projects, addState
  //   };

  //   localStorage.setItem("user", JSON.stringify(newState));
  // };

  const handleSaveСalculation = () => {
    const project = {
      name: `${calculationName}`,
      tax_rate: taxRate,
      ...basicCost,
      ...additionalCost,
      date: Date(),
    };

    // const userState = getUserSavedCalculations();
    // setUserSavedCalculations(userState, `${calculationName}`);

    localStorage.setItem(`project_${calculationName}`, JSON.stringify(project));
    setCalculationName("");
    handleClose();
  };

  // localStorage.removeItem('user')

  const handleFormClear = () => {
    setBasicCost(basicCostInitialState);
    setAdditionalCost(additionalCostsInitialState);
    setTaxRate(taxRateInitialState);
  };

  return (
    <>
      <Typography className="section__header">
        Handmade Goods Cost Calculator
      </Typography>
      <Typography className="section__descr">
        This is a simple calculator for defining handmade goods cost. Simply
        fill in the following inputs and receive final calculations.
      </Typography>

      <FormGroup>
        <InputLabel htmlFor="input-time" className="input__label">
          Enter the time in hours you've spent:
        </InputLabel>
        <Input
          id="input-time"
          aria-label="Time spent input"
          placeholder="f.e. 5"
          type="number"
          required
          name="hours"
          value={basicCost.hours}
          onChange={handleBasicCalcInput}
        />
        <InputLabel htmlFor="input-labour-cost" className="input__label">
          Enter the cost of your labour hour:
        </InputLabel>
        <Input
          id="input-labour-cost"
          aria-label="Cost of labour"
          placeholder="f.e. 8"
          required
          type="number"
          name="payment"
          value={basicCost.payment}
          onChange={handleBasicCalcInput}
        />
        <InputLabel htmlFor="input-material-costs" className="input__label">
          Enter material costs for the product:
        </InputLabel>
        <Input
          id="input-material-costs"
          aria-label="Material costs"
          placeholder="f.e. 15"
          name="materials"
          type="number"
          value={basicCost.materials}
          onChange={handleBasicCalcInput}
          required
        />
        <InputLabel htmlFor="input-delivery-costs" className="input__label">
          Enter delivery costs(if needed):
        </InputLabel>
        <Input
          id="input-delivery-costs"
          aria-label="Delivery costs"
          placeholder="f.e. 5"
          name="delivery"
          type="number"
          value={additionalCost.delivery}
          onChange={handleAdditionalCalcInput}
        />

        <InputLabel htmlFor="input-packaging" className="input__label">
          Enter packaging costs (if needed, including final wrapping):
        </InputLabel>
        <Input
          id="input-packaging"
          aria-label="packaging costs"
          placeholder="f.e. 2"
          name="packaging"
          type="number"
          value={basicCost.packaging}
          onChange={handleBasicCalcInput}
        />
        <InputLabel htmlFor="input-tax-rate" className="input__label">
          Enter tax rate:
        </InputLabel>
        <Input
          id="input-tax-rate"
          aria-label="Tax rate"
          placeholder="f.e. 10"
          name="tax_rate"
          type="number"
          value={taxRate.tax_rate}
          onChange={handleTaxInput}
        />

        <InputLabel htmlFor="input-additional-costs" className="input__label">
          Enter additional costs(electricity, water, transportation etc.):
        </InputLabel>
        <Input
          id="input-additional-costs"
          aria-label="Additional costs"
          placeholder="f.e. 3.5"
          name="additional_costs"
          type="number"
          value={additionalCost.additional_costs}
          onChange={handleAdditionalCalcInput}
        />

        <InputLabel htmlFor="input-equipment-usage" className="input__label">
          Enter costs on basic equipment usage (if needed):
        </InputLabel>
        <Input
          id="input-equipment-usage"
          aria-label="Core materials equipment usage costs"
          placeholder="f.e. 0.7"
          name="equipment"
          type="number"
          value={additionalCost.equipment}
          onChange={handleAdditionalCalcInput}
        />
      </FormGroup>

      <Typography className="basicCosts">
        Materials and work: {basicResult}
      </Typography>
      <Typography className="additionals">
        Additional costs: {additionalResult}
      </Typography>
      <Typography className="taxes">
        Tax rate (%): {taxRate.tax_rate}
      </Typography>

      <Typography className="totalCost">Total: {totalCost || 0} </Typography>

      <Divider />
      <ComonBtn handleBtnClick={handleOpen}>Save calculation</ComonBtn>
      <ComonBtn handleBtnClick={handleFormClear}>Clear all</ComonBtn>
      {/* <ComonBtn handleBtnClick={handleLastSavedCalculation}>Show last saved</ComonBtn> */}
      <Modal
        className="modal__save"
        open={open}
        onClose={handleClose}
        aria-label="Modal vave calculation"
      >
        <Box className="modal__content">
          <FormGroup>
            <InputLabel htmlFor="input-name" className="input__label">
              Enter the name of your calculation:
            </InputLabel>
            <Input
              id="input-name"
              aria-label="Calculation name"
              placeholder="f.e. Felt doll small"
              type="string"
              name="name"
              value={calculationName}
              onChange={handleSetCalculationName}
            />
          </FormGroup>
          <ComonBtn handleBtnClick={handleSaveСalculation}>Save</ComonBtn>
          <ComonBtn handleBtnClick={handleClose}>Cancel</ComonBtn>
        </Box>
      </Modal>
    </>
  );
};

export default Calculator;
