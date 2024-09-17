import React from "react";
import { useState } from "react";
import { Typography, Input, InputLabel, FormGroup } from "@mui/material";

const Calculator = () => {
  const [basicCost, setBasicCost] = useState({
    hours: '',
    payment: '',
    materials: '',
    package: '',
  });

  const handleBasicCalcInput = (event) => {
    const { name, value } = event.target;
    setBasicCost((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [additionalCost, setAdditionalCost] = useState({
    delivery: '',
    additional_costs: '',
    equipment: '',
  });

  const handleAdditionalCalcInput = (event) => {
    const { name, value } = event.target;
    setAdditionalCost((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [taxRate, setTaxRate] = useState("");
  const handleTaxInput = (event) => {
    setTaxRate(event.target.value);
  };

  const costsCalculations = (obj) => {
    const values = Object.values(obj);

    const calculation = values.reduce(function (currSum, currNum) {
      return Number(currSum) + Number(currNum);
    }, 0);
    return calculation;
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

        <InputLabel htmlFor="input-package" className="input__label">
          Enter package costs (if needed, including final wrapping):
        </InputLabel>
        <Input
          id="input-package"
          aria-label="Package costs"
          placeholder="f.e. 2"
          name="package"
          type="number"
          value={basicCost.package}
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
        Materials and work: {costsCalculations(basicCost)}
      </Typography>
      <Typography className="additionals">
        Additional costs: {costsCalculations(additionalCost)}
      </Typography>
      <Typography className="taxes">
        Tax rate: {taxRate}
      </Typography>

      <Typography className="totalCost">Total: {0}</Typography>
    </>
  );
};

export default Calculator;
