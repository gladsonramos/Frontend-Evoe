import React from "react";
import { Container } from "./styles";

interface TextProps {
  children?: React.ReactNode;
}

function Text({ children }: TextProps) {
  return (
    <Container>{children}</Container>
  );
}

export default Text;
