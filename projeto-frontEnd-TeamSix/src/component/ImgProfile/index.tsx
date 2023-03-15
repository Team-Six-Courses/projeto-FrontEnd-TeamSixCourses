import { StyledImgC } from './styled';

interface IImgProprs {
  src?: string | undefined;
}

export const Img = ({ src }: IImgProprs) => {
  return (
    <StyledImgC>
      <img src={src} alt="Imagem de perfil" />
    </StyledImgC>
  );
};
