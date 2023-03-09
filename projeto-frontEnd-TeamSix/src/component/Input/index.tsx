import React from 'react'
import { TextField } from "@mui/material"
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputDefaultProps{
    label: string;
    type: "text" | "email" | "password";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const Input = ({ label, type, register, error }: IInputDefaultProps) => {
  return (
    <fieldset>
      <TextField type={type} label={label} {...register}/>
      { error ? <p>{error.message}</p> : null}
    </fieldset>
  )
}
