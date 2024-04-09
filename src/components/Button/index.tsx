import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children: String;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}

export default Button;
