import React, { useContext } from 'react';
import { ProfileContext } from '../../Providers/ProfileContext/ProfileContext';
import { StyledImg } from '../Cards/style';
import { Img } from '../ImgProfile';
import { StyledUser, StyledUserInformations, StyleInformations } from './style';

export const InformationProfile = () => {
  const { user } = useContext(ProfileContext);

  return (
    <StyleInformations>
      <div className="title">
        <h2>Informações</h2>
      </div>
      <StyledUser>
        <Img src={user?.avatar} />
        <div className="userInformations">
          <h4>{user?.name.toLocaleUpperCase()}</h4>
          <p>{user?.email}</p>
        </div>
      </StyledUser>
      <StyledUserInformations>
        <p>Teorias: {user?.posts.length}</p>
        <p>Curtidas em teorias: {user?.likePost.length}</p>
      </StyledUserInformations>
    </StyleInformations>
  );
};
