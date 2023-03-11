import styled from 'styled-components';

export const StyleBackgroundImage = styled.div`
  background: url('https://www.themoviedb.org/t/p/original/Ab9eQH5O3VCTQjJsQghxjYOkfMp.jpg')
    no-repeat;
`;

export const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  background: rgba(111, 98, 98, 0.6);

  .accontActivities {
    width: 60%;

    margin-left: 3%;
    margin-top: 5%;
  }

  @media (max-width: 769px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    .accontActivities {
      width: 85%;
    }
  }
`;

export const StyledUl = styled.ul`
  background-color: rgba(40, 40, 40, 0.9);

  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  .title {
    background-color: rgba(26, 26, 26, 0.7);

    height: 80px;
    width: 100%;

    display: flex;
    align-items: center;

    h2 {
      font-size: 1.5625rem;
      font-weight: bold;
      font-family: 'Inter', sans-serif;

      color: #f5f5f5;

      margin-left: 8%;
    }
  }

  @media (max-width: 769px) {
    .title > h2 {
      font-size: 1.25rem;
    }
  }
`;
