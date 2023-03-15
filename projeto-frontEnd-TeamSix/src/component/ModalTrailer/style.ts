import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  position: absolute;
  top: 0;

  z-index: 1;
`;

export const StyledModalSection = styled.section`
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-color: rgba(0, 0, 0, 0.4);

  gap: 10px;

  height: 100vh;

  svg {
    color: #fff;

    font-size: 32px;

    cursor: pointer;

    margin-top: 50px;
  }
`;
