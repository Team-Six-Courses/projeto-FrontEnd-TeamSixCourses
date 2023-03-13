import React from 'react'
import { StyledButton } from './style';

interface IButtonDefaultProps{
    type: 'submit';
    name: string;
}

export const Button = ({ type, name }: IButtonDefaultProps) => {
  return (
    <StyledButton type={type}>{name}</StyledButton>
  )
}
