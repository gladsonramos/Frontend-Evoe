import styled from 'styled-components';

export const StyledButton = styled.button`
    background: #131414;
    box-shadow: 0px 1px 3px #00000029;
    border: 1px solid #131414;
    border-radius: 10px;
    opacity: 1;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    font: normal normal bold 14px/15px Inconsolata;

    &:active {
        background: white;
        color: black;
    }
`;
