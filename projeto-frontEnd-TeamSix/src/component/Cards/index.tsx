import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeaderPost, StyledImg, StyledLi } from './style';
import { ICard } from './type';

export const Card = ({ title, descrition, img }: ICard) => {
  return (
    <StyledLi>
      <StyledHeaderPost>
        <StyledImg $src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/3dPhs7hUnQLphDFzdkD407VZDYo.jpg" />
        <h3>{title}</h3>
      </StyledHeaderPost>
      <p>{descrition}</p>
      <Link to="">Continuar lendo...</Link>
    </StyledLi>
  );
};
