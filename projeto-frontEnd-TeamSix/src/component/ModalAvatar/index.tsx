import { ClassNames } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { api } from '../../API';
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
  const [avatars, setAvatars] = useState<IAvatars[]>([] as IAvatars[]);
  const [avatarSelect, setAvatarSelect] = useState('');

  const getAvatars = async () => {
    try {
      const response = await api.get<IAvatars[]>('/avatars');

      setAvatars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const editAvatar = async (avatarString: string) => {
      const token = localStorage.getItem('@TOKEN');
      const id = localStorage.getItem('@USERID');

      const request = {
        avatar: avatarString,
      };

      try {
        await api.patch(`/users/${id}}`, request, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error(error);
      }
    };
  }, [avatarSelect]);

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
                    setAvatarSelect(avatarAPI.avatar);
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
          />
        </StyledButtons>
      </StyledModalAvatar>
    </StyledModalContainer>
  );
};
