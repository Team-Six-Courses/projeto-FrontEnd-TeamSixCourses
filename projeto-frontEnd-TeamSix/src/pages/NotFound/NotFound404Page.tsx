import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledBackgroundImg,
  StyledMain,
  StyledSubTitle,
  StyledTitle,
} from './style';

export const NotFoundPage = () => {
  return (
    <>
      <header>NotFound 404 HEADER</header>
      <StyledBackgroundImg>
        <StyledMain>
          <StyledTitle>404 - Not Found</StyledTitle>
          <StyledSubTitle>Sua Página não foi encontrada</StyledSubTitle>
          <Link to="/home">Voltar para home</Link>
        </StyledMain>
      </StyledBackgroundImg>
    </>
  );
};
