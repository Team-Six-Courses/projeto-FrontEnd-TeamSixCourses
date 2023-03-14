import React, { useEffect, useState } from 'react';
import { IHeaderProps, StyledHeader } from './style';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import imgPerfil from '../../assets/userProfileimg.svg';
import { ModalAvatar } from '../ModalAvatar';
import { api } from '../../API';
import { IUser } from '../../types/type';
import { Img } from '../ImgProfile';

const Header = ({ background }: IHeaderProps) => {
  const [modalProfile, setModalProfile] = useState(false);
  const [modalAvatar, setModalAvatar] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);

  const token = localStorage.getItem('@TOKEN');
  const id = localStorage.getItem('@USERID');

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await api.get<IUser>(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <StyledHeader background={background}>
      <div onClick={() => navigate('/home')}>
        <h1>TEAM SIX</h1>
        <small>Films</small>
      </div>
      {token ? (
        <div onClick={() => setModalProfile(!modalProfile)}>
          <figure>
            <Img src={user.avatar} />
          </figure>
          {!modalProfile ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <>
              <MdOutlineKeyboardArrowUp />
              <div className="modalProfile">
                <p
                  onClick={() => {
                    navigate('/home/perfil');
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
      ) : null}
      {modalAvatar ? <ModalAvatar setModalAvatar={setModalAvatar} /> : null}
    </StyledHeader>
  );
};

export default Header;
