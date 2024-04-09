import React from "react";
import { Container } from "./styles";

interface TitleProps {
  children?: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <Container>{children}</Container>
  );
}

export default Title;
