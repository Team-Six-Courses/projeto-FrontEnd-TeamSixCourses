import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../API';
import { UserContext } from '../../Providers/userContext/userContext';
import { IUser } from '../../types/type';
import { Button } from '../Button';
import { Img } from '../ImgProfile';
import {
  StyledButtons,
  StyledModalAvatar,
  StyledModalContainer,
  StyledUlAvatars,
} from './style';
import { IAvatars } from './type';

interface IModalAvatarProps {
  setModalAvatar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalAvatar = ({ setModalAvatar }: IModalAvatarProps) => {
  const { avatarSelect, setAvatarSelect } = useContext(UserContext);
  const [avatars, setAvatars] = useState<IAvatars[]>([] as IAvatars[]);

  const getAvatars = async () => {
    try {
      const response = await api.get<IAvatars[]>('/avatars');
      setAvatars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const editAvatar = async (avatarString: string) => {
    const token = localStorage.getItem('@TOKEN');
    const id = Number(localStorage.getItem('@USERID'));

    console.log(avatarString);
    const request = {
      avatar: avatarString,
    };

    try {
      const response = await api.patch<IUser>(`/users/${id}`, request, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAvatarSelect(response.data.avatar);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAvatars();
  }, []);

  return (
    <StyledModalContainer>
      <StyledModalAvatar>
        <h3>Escolha seu ícone</h3>
        <StyledUlAvatars>
          {avatars.map((avatarAPI) => {
            return (
              <li key={avatarAPI.id}>
                <button
                  onClick={() => {
                    editAvatar(avatarAPI.avatar);
                  }}
                >
                  <Img src={avatarAPI.avatar} />
                </button>
              </li>
            );
          })}
        </StyledUlAvatars>
        <StyledButtons>
          <Button
            $color="#fff"
            $background="rgba(3, 37, 65, 1)"
            type="button"
            name="cancelar"
            onClick={() => {
              setModalAvatar(false);
            }}
          />
          <Button
            $color="#fff"
            $background="rgba(3, 37, 65, 1)"
            type="button"
            name="Selecionar"
            onClick={() => {
              setModalAvatar(false);
            }}
          />
        </StyledButtons>
      </StyledModalAvatar>
    </StyledModalContainer>
  );
};
