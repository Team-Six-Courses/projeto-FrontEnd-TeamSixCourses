import styled, { css } from 'styled-components';

interface IStyledUrl {
  $src: string;
}

export const StyledLi = styled.li`
  width: 85%;
  min-height: 262px;

  margin-top: 30px;

  background-color: rgba(26, 26, 26, 0.92);

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 40px;

  position: relative;

  p {
    font-size: 1.25rem;
    font-family: 'Inter', sans-serif;

    overflow: hidden;
    display: -webkit-box;
    line-height: 150%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    width: 95%;

    margin: 0 auto;

    color: #f5f5f5;
  }

  a {
    position: absolute;
    right: 5%;
    bottom: 10px;

    text-decoration: none;

    font-size: 1.25rem;
    font-style: italic;

    color: #f5f5f5;
  }

  @media (max-width: 769px) {
    min-height: 220px;
    width: 90%;
    p {
      font-size: 1rem;
    }
    a {
      font-size: 1rem;
    }
  }
`;

export const StyledHeaderPost = styled.div`
  display: flex;
  align-items: center;

  margin-left: 3%;
  margin-top: -20px;

  gap: 20px;

  h3 {
    font-size: 1.75rem;
    font-family: 'Inter', sans-serif;
    font-weight: bold;

    color: #f5f5f5;
  }

  @media (max-width: 769px) {
    h3 {
      font-size: 22px;
    }
  }
`;

const StyledImgCSS = css<IStyledUrl>`
  width: 71px;
  height: 71px;

  border-radius: 50px;
  ${({ $src }) => {
    return css`
      background: url(${$src}) center no-repeat;
      background-size: 130px;
    `;
  }}

  @media (max-width: 769px) {
    width: 60px;
    height: 60px;
  }
`;

export const StyledImg = styled.div<IStyledUrl>`
  ${StyledImgCSS}
`;
