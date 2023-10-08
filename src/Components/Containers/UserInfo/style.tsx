import styled from "styled-components";
import { secondary, terciary } from "../../../Commons/colors";

const UserInfoContainer = styled.div<{ children: React.ReactNode }>`
    display: flex;
    padding: 3px;
    color: ${terciary};
    border-radius:10px;
    &:hover{
        background-color: ${secondary}
    }
`
const UserDataContainer = styled.div<{ children: React.ReactNode }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px dashed ${terciary};
    padding: 0em 0.8em;
    h1{
        font-size: 1em;
        color: white;
        margin-bottom: 0.5em;
    }
    h2{
        font-size: 0.8em;
    }
`

const ProfileImage = styled.img`
    border-radius: 50%;
    margin-right:10px; 
`

export {
    ProfileImage,
    UserDataContainer, 
    UserInfoContainer
};

