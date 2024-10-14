import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import ComonBtn from "../buttons/ComonBtn";

const FormDataComponent = ({
  currentCalculation,
  id,
  getCalculationDataAsync,
  handleUpdateCalculation,
  deleteCalculation
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCalculationDataAsync(id));
  });

  return (
    <div className="formData">
      <ul className="calculation_data">
        <li>
          <Typography>Calculation name: {currentCalculation.name}</Typography>
        </li>
        <li>
          <Typography>
            Time spent for the product: {currentCalculation.hours} hour(s)
          </Typography>
        </li>
        <li>
          <Typography>
            The cost of labour hour: {currentCalculation.payment} units / hour
          </Typography>
        </li>
        <li>
          <Typography>
            Material costs for the product: {currentCalculation.materials} units
          </Typography>
        </li>
        <li>
          <Typography>
            Delivery costs: {currentCalculation.delivery || 0} unit(s)
          </Typography>
        </li>
        <li>
          <Typography>
            Packaging costs: {currentCalculation.packaging || 0} unit(s)
          </Typography>
        </li>
        <li>
          <Typography>
            Tax rate: {currentCalculation.tax_rate || 0} %
          </Typography>
        </li>
        <li>
          <Typography>
            Additional costs: {currentCalculation.additional_costs || 0} unit(s)
          </Typography>
        </li>
        <li>
          <Typography>
            Costs on basic equipment usage: {currentCalculation.equipment || 0} unit(s)
          </Typography>
        </li>
        <li>
          <Typography>
            Calculation date: {currentCalculation.date || 0}
          </Typography>
        </li>
      </ul>

      <form
        id="update_calculation"
        className="form_updateCalculation"
        onSubmit={handleUpdateCalculation}
      >
        <h3>Update calculation data:</h3>
        <input type="text" name="name" placeholder="New name:" />
        <input type="number" name="hours" placeholder="Time spent now: " />
        <input type="number" name="payment" placeholder="New labour cost: " />
        <input
          type="number"
          name="materials"
          placeholder="New material costs: "
        />
        <input
          type="number"
          name="delivery"
          placeholder="New delivery costs: "
        />
        <input
          type="number"
          name="packaging"
          placeholder="New packaging costs: "
        />
        <input type="number" name="tax_rate" placeholder="Current tax rate: " />
        <input
          type="number"
          name="additional_costs"
          placeholder="New additional costs: "
        />
        <input
          type="number"
          name="equipment"
          placeholder="New equipment usage costs: "
        />
        <button type="submit">Submit</button>
      </form>


      <ComonBtn handleBtnClick={deleteCalculation}>Delete calculation</ComonBtn>
    </div>
  );
};

export default FormDataComponent;
