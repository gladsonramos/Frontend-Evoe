import Input from "../Input";
import Text from "../Text";

function TextInput({ TextLabel, value, onChange, disabled, type }: any) {
    return (
        <>
            <div style={{ marginTop: 15 }}>
                <Text>{TextLabel}</Text>
            </div>
            <Input type={type} onChange={onChange} disabled={disabled || false} value={value}></Input>
        </>
    );
}

export default TextInput;
