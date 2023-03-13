import styled from 'styled-components';

export const StyledBackgroundImg = styled.div`
  background: url('https://www.themoviedb.org/t/p/original/wqBlk1ejN71gzKvlbXYrC1FfdsY.jpg')
    no-repeat;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  background-color: rgba(173, 167, 209, 0.2);

  gap: 30px;

  height: 100vh;

  padding-top: 10%;
  padding-left: 5%;

  a {
    font-size: 15px;
    font-weight: bold;

    color: #ac0000;
  }

  @media (min-width: 769px) {
    gap: 50px;

    a {
      font-size: 25px;
    }
  }
`;

export const StyledTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;

  color: #032541;

  text-shadow: rgba(255, 0, 0, 0.8) 0 0 37px;

  @media (min-width: 769px) {
    font-size: 60px;
  }
`;

export const StyledSubTitle = styled.h2`
  font-size: 25px;

  text-shadow: rgba(255, 0, 0, 0.7) 0 0 4px;

  @media (min-width: 769px) {
    font-size: 40px;
  }
`;
