import React from "react";
import Input from "../Input";
import Text from "../Text";

interface TextInputProps {
  TextLabel?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: string;
}

function TextInput({ TextLabel, value, onChange, disabled = false, type }: TextInputProps) {
    return (
        <>
            <div style={{ marginTop: 15 }}>
                {TextLabel && <Text>{TextLabel}</Text>}
            </div>
            <Input type={type} onChange={onChange} disabled={disabled} value={value}></Input>
        </>
    );
}

export default TextInput;
