import React from "react";
import { Container } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  disabled?: boolean;
}

function Input({
  placeholder,
  icon,
  onChange,
  value,
  disabled = false,
  type,
  ...props
}: InputProps) {
  return (
    <Container
      {...props}
      type={type}
      placeholder={placeholder}
      icon={icon}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default Input;
