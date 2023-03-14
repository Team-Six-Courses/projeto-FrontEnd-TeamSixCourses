import React from 'react';
import { HTMLAttributes } from 'react';
import { StyledImgC } from './styled';

interface IImgProprs {
  src: string | undefined;
}

export const Img = ({ src }: IImgProprs) => {
  return (
    <StyledImgC>
      <img src={src} alt="" />
    </StyledImgC>
  );
};
