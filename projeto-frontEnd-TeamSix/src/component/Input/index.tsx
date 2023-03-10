import React from 'react'
import { TextField } from "@mui/material"
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldSet, StyledTextField } from './style';

interface IInputDefaultProps{
    label: string;
    type: "text" | "email" | "password";
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const Input = ({ label, type, register, placeholder, error }: IInputDefaultProps) => {
  return (
    <StyledFieldSet>
      <StyledTextField type={type} label={label} placeholder={placeholder} {...register}/>
      { error ? <p>{error.message}</p> : null}
    </StyledFieldSet>
  )
}
