import React from "react";
import FormData from "../formdata/FormData";
import ComonBtn from "../buttons/ComonBtn";
import { useParams, useNavigate } from "react-router-dom";

const CalculationForm = () => {

  const {projectName} = useParams();

  const projectData = localStorage.getItem("project_" + projectName);

  const navigate = useNavigate();
  const handleBackBtnClick = () => navigate(-1);

  const handleFieldChange = () => {

    //   const project = {
    //     name: `${calculationName}`,
    //     tax_rate: taxRate,
    //     ...basicCost,
    //     ...additionalCost,
    //     date: Date(),
    //   };
  
    //   localStorage.setItem(`project_${calculationName}`, JSON.stringify(project));
    //   setCalculationName("");
    //   handleClose();
  }

  return (
    <div>
      <ComonBtn handleBtnClick={handleBackBtnClick}>Go back</ComonBtn>
      <FormData fieldData={projectData} handleChange={handleFieldChange}/>

      {/* const additionalCosts = {
        delivery: lastCalculation.delivery,
        additional_costs: lastCalculation.additional_costs,
        equipment: lastCalculation.equipment,
      };

      const basicCosts = {
        hours: lastCalculation.hours,
        payment: lastCalculation.payment,
        materials: lastCalculation.materials,
        packaging: lastCalculation.packaging,
      };

      const taxRate = lastCalculation.tax_rate; */}
    </div>
  );
};

export default CalculationForm;
