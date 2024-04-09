import styled from 'styled-components';

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
margin-top: 10px;
  all: unset;
  width: 7px;
  height: 7px;
  display: inline-block;
  appearance: none; 
  background: #FFFFFF;
  border: 1px solid #CFD0D0;
  padding: 3px;
  border-radius: 2px;
  position: relative; 
  cursor: pointer;

  &:checked {
    background-color: black;
  }

  &:checked::after {
    content: '';
    width: 3px;
    height: 5px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg); 
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
