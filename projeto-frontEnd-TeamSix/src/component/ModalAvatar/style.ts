import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.4);

  width: 100vw;
  height: 100vh;
`;

export const StyledModalAvatar = styled.section`
  width: 601px;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 30px;

  background-color: #032541;

  position: relative;

  h3 {
    font-size: 25px;
    font-weight: bold;

    color: #fff;

    margin-left: 6%;
  }
`;

export const StyledUlAvatars = styled.ul`
  width: 518px;
  height: 350px;

  border: solid 1px #fff;

  margin: 0 auto 50px auto;
`;

export const StyledButtons = styled.div`
  position: absolute;
  bottom: 3%;
  right: 3%;

  display: flex;

  gap: 30px;
`;
