import styled from 'styled-components';

export const StyleInformations = styled.section`
  background-color: rgba(40, 40, 40, 0.9);

  width: 391px;
  height: 315px;

  margin-right: 3%;
  margin-top: 5%;

  border-radius: 5px;

  .title {
    background-color: rgba(26, 26, 26, 0.7);

    height: 80px;
    width: 100%;

    display: flex;
    align-items: center;

    border-radius: 5px 5px 0 0;

    h2 {
      font-size: 1.5625rem;
      font-weight: bold;
      font-family: 'Inter', sans-serif;

      color: #f5f5f5;

      margin-left: 8%;
    }
  }
`;

export const StyledUser = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  width: 76px;

  margin-left: 3%;
  margin-top: 5%;

  .userInformations {
    display: flex;
    flex-direction: column;

    gap: 10px;

    h4 {
      font-size: 1.5625rem;
      font-weight: bold;
      font-family: 'Inter', sans-serif;

      color: #f5f5f5;
    }

    p {
      font-size: 16px;
      font-family: 'Inter', sans-serif;

      color: #f5f5f5;
    }
  }
`;

export const StyledUserInformations = styled.div`
  background-color: rgba(73, 73, 73, 0.6);

  height: 76px;
  width: 90%;

  margin: 0 auto;
  margin-top: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;

  p {
    font-size: 16px;
    font-weight: bold;

    color: #f5f5f5;

    margin-left: 3%;
  }
`;
