import React from 'react';
import { Button } from '../Button';
import {
  StyledButtons,
  StyledModalAvatar,
  StyledModalContainer,
  StyledUlAvatars,
} from './style';

interface IModalAvatarProps {
  setModalAvatar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalAvatar = ({ setModalAvatar }: IModalAvatarProps) => {
  return (
    <StyledModalContainer>
      <StyledModalAvatar>
        <h3>Escolha seu ícone</h3>
        <StyledUlAvatars></StyledUlAvatars>
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
