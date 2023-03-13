import styled from 'styled-components';
import img from '../../assets/BGLogin.svg';

export const StyledMainLogin = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: url(${img});
  background-repeat: no-repeat;
  background-origin: content-box;
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
`;

export const StyledFormLogin = styled.form`
  width: 432px;
  max-width: 50%;
  padding: 26px;
  background: rgba(217, 217, 217, 0.75);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    color: #032541;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    text-align: center;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0px 20px;
    gap: 10px;
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
`;
