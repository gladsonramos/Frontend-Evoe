import { Container } from "./styles";
// Exemplo de uso do componente StyledInput
function Input({
    placeholder,
    icon,
    onChange,
    value,
    disabled = false,
    type,
    ...props
}: any) {
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
