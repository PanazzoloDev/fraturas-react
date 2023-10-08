import { useAuthContext } from "../../../Contexts/AuthContext"
import {
    ProfileImage,
    UserDataContainer,
    UserInfoContainer
} from "./style"

const UserInfo = () => {
    const { logout } = useAuthContext()
    return (
        <UserInfoContainer>
            <ProfileImage src="https://github.com/PanazzoloDev.png" alt="Wesley" />
            <button type="button" onClick={logout}>logout</button>
            <UserDataContainer>
                <h1>Wesley Panazzolo</h1>
                <h2>Administrador</h2>
            </UserDataContainer>
        </UserInfoContainer>
    )
}

export default UserInfo