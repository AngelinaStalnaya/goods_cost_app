import React from "react";
import { InputLabel, Input, SvgIcon } from "@mui/material";

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
  component
}) => {
  return (
    <>
      <InputLabel htmlFor={id} className="input__label">
      <SvgIcon component={component} inheritViewBox />

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
      />
    </>
  );
};

export default InputWithLabel;
