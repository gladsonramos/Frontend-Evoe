import styled from 'styled-components';

export const CloseIcon = styled.img`
  width: 20px; /* Ajuste o tamanho conforme necessário */
  height: 20px; /* Ajuste o tamanho conforme necessário */
  position: absolute;
  top: 10px; /* Ajuste conforme necessário */
  right: 10px; /* Ajuste conforme necessário */
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; 

  @media screen and (max-width: 768px) { 
    padding: 20px; 
  }
`;

export const Space = styled.div`
 height: 15px;
 
@media screen and (max-width: 768px) { 
  height: 0px;
    }
`

export const ModalContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 1px 3px #00000029;
    border: 0.5px solid #CFD0D0;
    border-radius: 5px;
    opacity: 1;
    padding: 20px;
    position: fixed;

   
    @media screen and (max-width: 768px) { 
        flex-direction: column; 
        top: 50%;
     left: 50%; 
  transform: translate(-50%, -50%); 
  width: 80%; 
  max-height: 90%;
  overflow-y: auto; 
  z-index: 1000; 
    }
`;
