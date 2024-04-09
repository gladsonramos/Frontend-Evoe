import styled from 'styled-components';
import 'typeface-poppins';

export const Container = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    color: #0B0C27;
    opacity: 1;
    text-align: center; 

    @media (max-width: 768px) {
        font-size: 27px;
    }
`;
