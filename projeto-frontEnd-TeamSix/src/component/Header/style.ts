import styled from 'styled-components';

export interface IHeaderProps{
    background: string
}

export const StyledHeader = styled.header<IHeaderProps>`
  height: 100px;
  width: 100vw;
  background: ${props=>props.background};
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;


  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 80px;

    h1 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 34px;
      color: #ffffff;
    }

    small {
      font-family: 'Russo One';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 34px;
      color: #ff7d04;
    }
  }

  div:nth-child(2) {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-right: 80px;
    cursor: pointer;

    figure {
      border-radius: 100%;
      background-color: #ffffff;
      width: 80px;
      height: 80px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    svg {
      width: 36px;
      height: 36px;
      color: white;
    }
  }

  .modalProfile {
    width: 264px;
    background: rgb(3, 37, 65);
    padding: 10px;
    position: absolute;
    top: 94px;
    right: 36px;

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
      color: #ffffff;
      margin-bottom: 10px;

      :hover {
        filter: brightness(0.5);
      }
    }

    p:nth-child(2) {
      border-bottom: #ffffff 1px solid;
    }
  }
`;
