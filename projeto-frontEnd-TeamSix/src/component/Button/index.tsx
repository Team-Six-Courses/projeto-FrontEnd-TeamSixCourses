import { HTMLAttributes } from 'react';
import { StyledButton } from './style';

interface IButtonDefaultProps extends HTMLAttributes<HTMLElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  $background: string;
  $color: string;
}

export const Button = ({
  type,
  name,
  $background,
  $color,
  onClick,
}: IButtonDefaultProps) => {
  return (
    <StyledButton
      onClick={onClick}
      $color={$color}
      $background={$background}
      type={type}
    >
      {name}
    </StyledButton>
  );
};
