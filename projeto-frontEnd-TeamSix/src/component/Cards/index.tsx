import { useNavigate } from 'react-router-dom';
import { Img } from '../ImgProfile';
import { StyledHeaderPost, StyledLi } from './style';
import { ICard } from './type';

export const Card = ({ title, descrition, img, id }: ICard) => {
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
          navigate(`/home/discussion/${id}`);
        }}
      >
        Continuar lendo...
      </button>
    </StyledLi>
  );
};
