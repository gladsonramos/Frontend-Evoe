import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
`;

export const ContainerText = styled.div`
  text-align: center;
`;

export const FlexContainer = styled.span`
  justify-content: space-between;
  gap: 10px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção do flex para coluna em telas menores */
  }
`;


