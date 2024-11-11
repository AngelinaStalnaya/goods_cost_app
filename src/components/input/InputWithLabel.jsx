import React from "react";
import { InputLabel, Input } from "@mui/material";

const InputWithLabel = ({
  id,
  labelText,
  aria_label,
  placeholder,
  type,
  required,
  name,
  value,
  handleChangeInput,
}) => {
  return (
    <>
      <InputLabel htmlFor={id} className="input__label" sx={{fontSize: ["15px", "20px"]}}>
        {labelText}
      </InputLabel>
      <Input
        id={id}
        aria-label={aria_label}
        placeholder={placeholder}
        type={type}
        required={required}
        name={name}
        value={value}
        onChange={handleChangeInput}
        sx={{fontSize: ["15px", "20px"]}}
      />
    </>
  );
};

export default InputWithLabel;
