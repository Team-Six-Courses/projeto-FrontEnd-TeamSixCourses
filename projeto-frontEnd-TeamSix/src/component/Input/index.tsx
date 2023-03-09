import React from 'react'
import { TextField } from "@mui/material"
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldSet } from './style';

interface IInputDefaultProps{
    label: string;
    type: "text" | "email" | "password";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const Input = ({ label, type, register, error }: IInputDefaultProps) => {
  return (
    <StyledFieldSet>
      <TextField type={type} label={label} {...register}/>
      { error ? <p>{error.message}</p> : null}
    </StyledFieldSet>
  )
}
