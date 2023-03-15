import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import {
  StyledBackgroundImg,
  StyledMain,
  StyledSubTitle,
  StyledTitle,
} from './style';

export const NotFoundPage = () => {
  return (
    <>
      <Header background="rgba(65, 3, 3, 1)" />
      <StyledBackgroundImg>
        <StyledMain>
          <StyledTitle>404 - Not Found</StyledTitle>
          <StyledSubTitle>Sua Página não foi encontrada</StyledSubTitle>
          <Link to="/home">Voltar para home</Link>
        </StyledMain>
      </StyledBackgroundImg>
    </>
  );
};
