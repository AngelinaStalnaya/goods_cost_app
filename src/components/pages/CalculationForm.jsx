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

      const project = {
        name: `${calculationName}`,
        tax_rate: taxRate,
        ...basicCost,
        ...additionalCost,
        date: Date(),
      };
  
      localStorage.setItem(`project_${calculationName}`, JSON.stringify(project));
      setCalculationName("");
      handleClose();
  }

  return (
    <div>
      <ComonBtn handleBtnClick={handleBackBtnClick}>Go back</ComonBtn>
      <FormData fieldData={projectData} handleChange={handleFieldChange}/>
    </div>
  );
};

export default CalculationForm;
