import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyleText } from './style'

interface IDashTextDefaultProps{
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const DashText = ({ register, placeholder, error }: IDashTextDefaultProps) => {
  return (
    <>
    <StyleText placeholder={placeholder} {...register}/>
    { error ? <p>{error.message}</p> : null}
    
    </>
  )
}
