import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  background: rgba(245, 245, 245, 0.85);
  border-radius: 8px;
  gap: 8px;
  box-shadow: 0px 0px 5px #ff7d04;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  :hover {
    box-shadow: 0px 0px 25px #01b4e4;
    outline: none;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;