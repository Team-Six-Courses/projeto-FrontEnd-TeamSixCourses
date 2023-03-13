import React, { useState } from 'react';
import { StyledHeader } from './style';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ModalAvatar } from '../ModalAvatar';

const Header = () => {
  const [modalProfile, setModalProfile] = useState(false);
  const [modalAvatar, setModalAvatar] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div>
        <h1>TEAM SIX</h1>
        <small>Films</small>
      </div>
      <div onClick={() => setModalProfile(!modalProfile)}>
        <figure>
          <img src="AVATAR" alt="AVATARPROFILE" />
        </figure>
        {modalProfile ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <>
            <MdOutlineKeyboardArrowUp />
            <div className="modalProfile">
              <p
                onClick={() => {
                  navigate('/perfil');
                }}
              >
                Perfil
              </p>
              <p
                onClick={() => {
                  setModalAvatar(true);
                }}
              >
                Avatar
              </p>
              <p
                onClick={() => {
                  localStorage.removeItem('@TOKEN');
                  navigate('/');
                }}
              >
                Sair
              </p>
            </div>
          </>
        )}
      </div>
      {modalAvatar ? <ModalAvatar setModalAvatar={setModalAvatar} /> : null}
    </StyledHeader>
  );
};

export default Header;
