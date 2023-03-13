import styled from 'styled-components';
import img from '../../assets/BGRegister.svg';

export const StyledMainRegister = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: url(${img});
  background-repeat: no-repeat;
  background-origin: content-box;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

export const StyledFormRegister = styled.form`
  width: 432px;
  max-width: 50%;
  padding: 26px;
  background: rgba(6, 3, 40, 0.47);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 769px ) {
    min-width: 360px;
  }

  @media (max-width: 420px ) {
    min-width: 250px;
  }

  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    color: #ffffff;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    width: 100%;
    height: 42px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 0px 5px #ff7d04;
    border: none;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    cursor: pointer;

    :hover {
      box-shadow: 0px 0px 25px #01b4e4;
    }
  }

  small {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;

    a {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: blue;
    }
  }
`;
