import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    gap: 20px;
    text-align: center;
    padding: 0 10% ;

    @media (max-width: 768px) {
        padding: 0  ;
    }

`;
export const FlexContainer = styled.span`
justify-content: space-between;
gap: 10px;
display: flex;
`;

export const ContainerButton = styled.div`
width: 100%
`;
