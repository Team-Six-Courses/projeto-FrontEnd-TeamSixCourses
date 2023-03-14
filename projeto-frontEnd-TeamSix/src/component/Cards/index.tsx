import React from 'react';
import { Link } from 'react-router-dom';
import { Img } from '../ImgProfile';
import { StyledImgC } from '../ImgProfile/styled';
import { StyledHeaderPost, StyledImg, StyledLi } from './style';
import { ICard } from './type';

export const Card = ({ title, descrition, img }: ICard) => {
  return (
    <StyledLi>
      <StyledHeaderPost>
        <Img src={img} />
        <h3>{title}</h3>
      </StyledHeaderPost>
      <p>{descrition}</p>
      <Link to="">Continuar lendo...</Link>
    </StyledLi>
  );
};
