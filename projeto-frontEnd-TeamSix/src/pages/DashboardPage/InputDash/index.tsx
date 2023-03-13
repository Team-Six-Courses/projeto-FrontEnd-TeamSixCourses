import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from './style';

interface IInputDefaultProps{
    type: "text" | "email" | "password";
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const InputDash = ({ type, register, placeholder, error }: IInputDefaultProps) => {
  return (
    <>
        <StyledInput type={type} placeholder={placeholder} {...register}/>
        { error ? <p>{error.message}</p> : null}
    </>
  )
}
