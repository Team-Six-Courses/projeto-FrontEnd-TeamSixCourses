
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { DiscussionContext } from '../../Providers/DiscussionContext/DIscussionContext';
import { Img } from '../ImgProfile';
import { StyledHeaderPost, StyledImg, StyledLi } from './style';
import { ICard } from './type';

export const Card = ({ title, descrition, img, id }: ICard) => {
  const { getPost } = useContext(DiscussionContext);


  const navigate = useNavigate();


  return (
    <StyledLi key={id}>
      <StyledHeaderPost>
        <Img src={img} />
        <h3>{title}</h3>
      </StyledHeaderPost>
      <p>{descrition}</p>
      <button
        type="button"
        onClick={() => {
          getPost(id, img);
          navigate('/home/discussion/:id:');
        }}
      >
        Continuar lendo...
      </button>
    </StyledLi>
  );
};
