import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0 10% 20%;
    @media (max-width: 768px) {
        padding: 0 2px 10%;
    }
  }
`;