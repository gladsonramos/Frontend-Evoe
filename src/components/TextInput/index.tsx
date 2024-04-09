import Input from "../Input";
import Text from "../Text";

function TextInput({ TextLabel, value, onChange, disabled }: any) {
    return (
        <>
            <div style={{ marginTop: 15 }}>
                <Text>{TextLabel}</Text>
            </div>
            <Input onChange={onChange} disabled={disabled || false} value={value}></Input>
        </>
    );
}

export default TextInput;
