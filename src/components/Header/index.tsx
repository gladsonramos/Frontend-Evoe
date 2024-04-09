import { HeaderWrapper, LogoImage } from "./styles"

export const Header = () => {
    return (
        <HeaderWrapper>
            <LogoImage src={require("../../assets/evoe.png")} alt="Logo" />
        </HeaderWrapper>
    )
}
