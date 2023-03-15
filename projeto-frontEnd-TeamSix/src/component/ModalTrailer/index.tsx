import { StyledModalContainer, StyledModalSection } from './style';
import { IoMdClose } from 'react-icons/io';

interface IModaltrailerProps {
  setModalTrailer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalTrailer = ({ setModalTrailer }: IModaltrailerProps) => {
  return (
    <StyledModalContainer>
      <StyledModalSection>
        <IoMdClose
          onClick={() => {
            setModalTrailer(false);
          }}
        />
        <iframe
          width="1351"
          height="530"
          src="https://www.youtube.com/embed/mbbPSq63yuM"
          title="Interestelar - Trailer Oficial 3 dublado"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </StyledModalSection>
    </StyledModalContainer>
  );
};
