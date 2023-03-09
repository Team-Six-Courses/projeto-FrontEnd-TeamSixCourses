import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0px 0px 5px #FF7D04;

  :focus {
    box-shadow: 0px 0px 25px #01b4e4;
  }
`;
