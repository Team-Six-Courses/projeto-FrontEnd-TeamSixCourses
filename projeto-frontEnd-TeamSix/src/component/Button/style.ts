import styled from 'styled-components';

interface IStyledProps {
  $background: string;
  $color: string;
}

export const StyledButton = styled.button<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  background-color: ${(props) => props.$background};
  border-radius: 8px;
  gap: 8px;
  box-shadow: 0px 0px 5px #ff7d04;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.$color};
  :hover {
    box-shadow: 0px 0px 25px #01b4e4;
    outline: none;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;
