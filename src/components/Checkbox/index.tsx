import React from "react";
import { StyledCheckbox } from "./styles";
import Text from "../Text";

interface CheckboxProps {
    checked?: boolean;
    title?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
}

function Checkbox({ checked, title, onChange, onClick }: CheckboxProps) {
    return (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', gap: 5 }}>
            <StyledCheckbox checked={checked} onChange={onChange} onClick={onClick} />
            <Text>{title}</Text>
        </div>
    );
}

export default Checkbox;
