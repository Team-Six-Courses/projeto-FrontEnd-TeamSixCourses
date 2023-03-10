import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledFieldSet = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(245, 245, 245, 0.85);
  border-radius: 8px;
  gap: 8px;
  box-shadow: 0px 0px 5px #ff7d04;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #828282;

  :hover {
    box-shadow: 0px 0px 25px #01b4e4;
    outline: none;
  }

  :focus {
    outline: none;
  }

  p {
    color: red;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
  }
`;

export const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ff7d04',
    },
    '&:hover fieldset': {
      borderColor: '#01b4e4',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#01b4e4',
    },
  },
});
