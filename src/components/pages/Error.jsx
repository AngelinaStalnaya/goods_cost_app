import React from "react";
import ComonBtn from "../buttons/ComonBtn";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleBackBtnClick = () => navigate(-1);
  return (
    <div className='error_page'>
      Hmmmm.... that page does not exist.
      <ComonBtn handleBtnClick={handleBackBtnClick}>Go back</ComonBtn>
    </div>
  );
};

export default Error;
