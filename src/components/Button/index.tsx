import { StyledButton } from "./styles";

function Button({ children, onClick }: any) {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    );
}

export default Button;