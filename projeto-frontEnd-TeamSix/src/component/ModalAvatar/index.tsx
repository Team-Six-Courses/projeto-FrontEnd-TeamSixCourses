import { ClassNames } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../API';
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
  const [avatars, setAvatars] = useState<IAvatars[]>([] as IAvatars[]);
  const [avatarSelect, setAvatarSelect] = useState('');

  const navigate = useNavigate();

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

    const request = {
      avatar: avatarString,
    };

    try {
      const response = await api.patch<IUser>(`/users/${id}`, request, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAvatarSelect(response.data.avatar)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // const editAvatar = async (avatarString: string) => {
    //   const token = localStorage.getItem('@TOKEN');
    //   const id = Number(localStorage.getItem('@USERID'));

    //   const request = {
    //     avatar: avatarString,
    //   };

    //   try {
    //     await api.patch<IUser>(`/users/${id}`, request, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    editAvatar(avatarSelect);
  }, []);

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
