import React from "react";
import { useState } from "react";
import { Typography, FormGroup, Divider, Box } from "@mui/material";
import ComonBtn from "../buttons/ComonBtn";
import ModalComponent from "../modal/ModalComponent";
import InputWithLabel from "../input/InputWithLabel";
import * as initialState from "../calculator/initialStates";
import * as requests from "../../requests/calculationRequests";

const Calculator = ({ authorized, userName }) => {
  const [basicCost, setBasicCost] = useState(initialState.basicCost);
  const [additionalCost, setAdditionalCost] = useState(
    initialState.additionalCosts
  );
  const [taxRate, setTaxRate] = useState(initialState.taxRate);

  const handleBasicCalcInput = (event) => {
    const { name, value } = event.target;
    setBasicCost((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleAdditionalCalcInput = (event) => {
    const { name, value } = event.target;
    setAdditionalCost((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleTaxInput = (event) => {
    const { name, value } = event.target;
    setTaxRate((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
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
    (basicResult + additionalResult) * (taxRate.tax_rate / 100) +
    basicResult +
    additionalResult;

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [calculationName, setCalculationName] = useState("");
  const handleSetCalculationName = (event) => {
    setCalculationName(event.target.value);
  };

  const handleSaveСalculation = async () => {
    const newDate = new Date();

    const project = {
      name: `${calculationName}`,
      author: userName,
      tax_rate: taxRate.tax_rate,
      ...basicCost,
      ...additionalCost,
      date: newDate.toLocaleDateString(),
    };

    await requests.createCalculation(project);

    setCalculationName("");
    handleCloseModal();
  };

  const handleFormClear = () => {
    setBasicCost(initialState.basicCost);
    setAdditionalCost(initialState.additionalCosts);
    setTaxRate(initialState.taxRate);
  };

  return (
    <>
      <Typography
        className="section__header"
        sx={{ fontSize: ["20px", "25px"], mb: "15px" }}
      >
        Handmade Goods Cost Calculator
      </Typography>
      <Typography sx={{ mb: ["15px", "20px"], fontSize: ["15px", "20px"]}}>
        This is a simple calculator for defining handmade goods cost. Fill in the following inputs and receive final calculations.
      </Typography>

      <FormGroup>
        <InputWithLabel
          id="input-time"
          labelText="Enter the time in hours you've spent:"
          aria_label="Time spent input"
          placeholder="f.e. 5"
          type="number"
          required
          name="hours"
          value={basicCost.hours}
          handleChangeInput={handleBasicCalcInput}
        />

        <InputWithLabel
          id="input-labour-cost"
          labelText="Enter the cost of your labour hour:"
          aria_label="Cost of labour"
          placeholder="f.e. 8"
          required
          type="number"
          name="payment"
          value={basicCost.payment}
          handleChangeInput={handleBasicCalcInput}
        />

        <InputWithLabel
          id="input-material-costs"
          labelText="Enter material costs for the product:"
          aria_label="Material costs"
          placeholder="f.e. 15"
          name="materials"
          type="number"
          value={basicCost.materials}
          handleChangeInput={handleBasicCalcInput}
          required
        />

        <InputWithLabel
          id="input-delivery-costs"
          labelText="Enter delivery costs(if needed):"
          aria_label="Delivery costs"
          placeholder="f.e. 5"
          name="delivery"
          type="number"
          value={additionalCost.delivery}
          handleChangeInput={handleAdditionalCalcInput}
        />

        <InputWithLabel
          id="input-packaging"
          labelText="Enter packaging costs (if needed, including final wrapping):"
          aria_label="packaging costs"
          placeholder="f.e. 2"
          name="packaging"
          type="number"
          value={basicCost.packaging}
          handleChangeInput={handleBasicCalcInput}
        />

        <InputWithLabel
          id="input-tax-rate"
          labelText="Enter tax rate:"
          aria_label="Tax rate"
          placeholder="f.e. 10"
          name="tax_rate"
          type="number"
          value={taxRate.tax_rate}
          handleChangeInput={handleTaxInput}
        />

        <InputWithLabel
          id="input-additional-costs"
          labelText="Enter additional costs(electricity, water, transportation etc.):"
          aria_label="Additional costs"
          placeholder="f.e. 3.5"
          name="additional_costs"
          type="number"
          value={additionalCost.additional_costs}
          handleChangeInput={handleAdditionalCalcInput}
        />

        <InputWithLabel
          id="input-equipment-usage"
          labelText="Enter costs on basic equipment usage (if needed):"
          aria_label="Core materials equipment usage costs"
          placeholder="f.e. 0.7"
          name="equipment"
          type="number"
          value={additionalCost.equipment}
          handleChangeInput={handleAdditionalCalcInput}
        />
      </FormGroup>
      <Divider  sx={{mb:'15px'}}/>

      <Typography sx={{ fontSize: ["15px", "20px"]  }}>
        Materials and work: {basicResult}
      </Typography>
      <Typography sx={{ fontSize: ["15px", "20px"]  }}>
        Additional costs: {additionalResult}
      </Typography>
      <Typography sx={{ fontSize:["15px", "20px"]  }}>
        Tax rate (%): {taxRate.tax_rate}
      </Typography>

      <Typography className="totalCost" sx={{ fontSize: ["25px", "35px"] }}>
        Total: {totalCost || 0}{" "}
      </Typography>

      <Divider sx={{mb: '10px'}}/>
      <Box className="calculation__btns">
        {authorized && (
          <ComonBtn handleBtnClick={handleOpenModal} variant="contained" sx={{fontSize: ["15px", "20px"]}}>Save calculation</ComonBtn>
        )}
        <ComonBtn handleBtnClick={handleFormClear} variant="contained" sx={{fontSize: ["15px", "20px"]}}>
          Clear all
        </ComonBtn>
      </Box>
      <ModalComponent
        className="modal__save"
        aria_label="Modal save calculation"
        open={open}
        handleCloseModal={handleCloseModal}
      >
        <FormGroup>
          <InputWithLabel
            id="input-name"
            labelText="Enter the name of your calculation:"
            aria_label="Calculation name"
            placeholder="f.e. Felt doll small"
            type="string"
            name="name"
            value={calculationName}
            handleChangeInput={handleSetCalculationName}
          />
        </FormGroup>
        <ComonBtn handleBtnClick={handleSaveСalculation} variant="contained" sx={{mr: '15px', mt: '15px', fontSize: ["15px", "20px"]}}>Save</ComonBtn>
        <ComonBtn handleBtnClick={handleCloseModal} variant="contained" sx={{mt: '15px', fontSize: ["15px", "20px"]}}>Cancel</ComonBtn>
      </ModalComponent>
    </>
  );
};

export default Calculator;
