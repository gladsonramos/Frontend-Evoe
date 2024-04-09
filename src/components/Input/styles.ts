import styled, { css } from 'styled-components';
import 'typeface-inconsolata';

// Definir os estilos base para o input
const baseInputStyles = css`
  flex: 1;
  background: #FFFFFF;
  box-shadow: inset 0px 1px 3px #00000029;
  border: 0.5px solid #CFD0D0;
  border-radius: 5px;
  opacity: 1;
  padding: 13px 10px; 
  color: #131414; 
  letter-spacing: 0px; 
  font: normal normal normal 16px/17px Inconsolata;

  &::placeholder { 
      font: normal normal normal 16px/17px Inconsolata;
      text-align: left; 
      color: #131414; 
      opacity: 1; 
  }

  &:disabled {
       background: #FFFFFF 0% 0% no-repeat padding-box;
        cursor: not-allowed;
        color: #CFD0D0;
    }

  &:focus {
    outline: transparent; 
  }
`;

export const Container = styled.input<any>`
  ${baseInputStyles}
  background-image: ${props => props.icon ? `url(${props.icon})` : 'none'};
  background-position: right 15px center; 
  background-repeat: no-repeat;
  background-size: 15px; 
  padding-right: ${props => props.icon ? '30px' : '10px'}; 
`;
