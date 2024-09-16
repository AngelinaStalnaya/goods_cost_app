import React from "react";
import { Typography, Input } from "@mui/material";
import CommonBtn from "../../components/buttons/ComonBtn";


const Calculator = () => {
  return (
    <>
      <Typography>Calculator</Typography>
      <Typography>Text is here...</Typography>
      <CommonBtn>Click me</CommonBtn>
      <Input placeholder="input smthg"></Input>
    </>
  );
};

export default Calculator;
