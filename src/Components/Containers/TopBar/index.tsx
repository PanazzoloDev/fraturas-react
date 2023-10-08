import UserInfo from "../UserInfo"
import { AppName, TopBarContainer } from "./style"

const TopBar = () => {
    return (
        <TopBarContainer>
            <UserInfo />
            <AppName>Controle de <br /> <strong>"Fraturas"</strong></AppName>
        </TopBarContainer>
    )
}

export default TopBar