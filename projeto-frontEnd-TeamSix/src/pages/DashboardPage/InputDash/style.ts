import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 85%;
  height: 42px;
  display: flex;
  flex-direction: column;
  background: rgba(73, 73, 73, 0.65);
  border-radius: 8px;
  gap: 8px;
  box-shadow: 0px 0px 5px #ff7d04;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #828282;

  :hover {
    box-shadow: 0px 0px 25px #01b4e4;
    outline: none;
  }

  :focus {
    outline: none;
  }

  p {
    color: red;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
  }
`;
