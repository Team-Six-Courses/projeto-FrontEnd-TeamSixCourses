import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLi } from './style';
import { ICard } from './type';

export const Card = ({ title, descrition, img }: ICard) => {
  return (
    <StyledLi>
      <div>
        <img src={img} alt="Foto de perfil" />
        <h3>{title}</h3>
      </div>
      <p>{descrition}</p>
      <Link to="">Continuar lendo</Link>
    </StyledLi>
  );
};
