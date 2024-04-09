import { StyledCheckbox } from "./styles";
import Text from "../Text";

function Checkbox({ checked, title, onChange, onClick }: any) {
    return (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', gap: 5 }}>
            <StyledCheckbox checked={checked} onChange={onChange} onClick={onClick} />
            <Text >{title}</Text>
        </div>
    );
}

export default Checkbox;
