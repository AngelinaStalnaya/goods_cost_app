import React from "react";
import { useState } from "react";
import { Typography, Input, InputLabel, FormGroup } from "@mui/material";

const Calculator = () => {
  const [totalCost, setTotalCost] = useState({
    hours: "",
    payment: "",
    delivery: "",
    package: "",
  });

  const [additionalCost, setAdditionalCost] = useState({
    tax_rate: "",
    equipment: "",
  });

  const handleBasicCalcInput = (event) => {
    setTotalCost(event.target.value);
  };

  const handleAdditionalCalcInput = (event) => {
    const { name, value } = event.target;
    setAdditionalCost((prevState) => ({
      ...prevState,
      [name]: value,
  
    }));
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
        />
        <InputLabel htmlFor="input-labour-cost" className="input__label">
          Enter the cost of your labour hour:
        </InputLabel>
        <Input
          id="input-labour-cost"
          aria-label="Cost of labour"
          placeholder="f.e. 8"
          required
        />
        <InputLabel htmlFor="input-material-costs" className="input__label">
          Enter material costs for the product:
        </InputLabel>
        <Input
          id="input-material-costs"
          aria-label="Material costs"
          placeholder="f.e. 15"
        />
        <InputLabel htmlFor="input-delivery-costs" className="input__label">
          Enter delivery costs(if needed):
        </InputLabel>
        <Input
          id="input-delivery-costs"
          aria-label="Delivery costs"
          placeholder="f.e. 5"
        />

        <InputLabel htmlFor="input-package" className="input__label">
          Enter package costs (if needed, including final wrapping):
        </InputLabel>
        <Input
          id="input-package"
          aria-label="Package costs"
          placeholder="f.e. 2"
        />
        <InputLabel htmlFor="input-tax-rate" className="input__label">
          Enter tax rate:
        </InputLabel>
        <Input
          id="input-tax-rate"
          aria-label="Tax rate"
          placeholder="f.e. 10"
        />

        <InputLabel htmlFor="input-additional-costs" className="input__label">
          Enter additional costs(electricity, water, transportation etc.):
        </InputLabel>
        <Input
          id="input-additional-costs"
          aria-label="Additional costs"
          placeholder="f.e. 3.5"
        />

        <InputLabel htmlFor="input-equipment-usage" className="input__label">
          Enter costs on basic equipment usage (if needed):
        </InputLabel>
        <Input
          id="input-equipment-usage"
          aria-label="Core materials equipment usage costs"
          placeholder="f.e. 0.7"
        />
      </FormGroup>

      <Typography className="totalCost">Total: {totalCost}</Typography>
    </>
  );
};

export default Calculator;
