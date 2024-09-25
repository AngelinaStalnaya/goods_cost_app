import React from 'react';
import ComonBtn from '../buttons/ComonBtn';
import { FormGroup, Typography } from '@mui/material';

const FormData = ({fieldData, handleChange}) => {
  fieldData= JSON.parse(fieldData)
  
  return (
    //   {/* {fieldData.hours}//
    // {fieldData.payment}//
    // {fieldData.materials}//
    // {fieldData.delivery}//
    // {fieldData.packaging}//
    // {fieldData.tax_rate}//
    // {fieldData.additional_costs}//
    // {fieldData.equipment}// */}

    <FormGroup className='formdata__box'>
      <Typography>{fieldData.name}</Typography>

      


    </FormGroup>


    // <ComonBtn handleBtnClick={handleChange}></ComonBtn>

  )


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


};

export default FormData;