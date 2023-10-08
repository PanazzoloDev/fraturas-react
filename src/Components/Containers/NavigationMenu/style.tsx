import styled from "styled-components"
import { primary } from "../../../Commons/colors"

const MenuContainer = styled.div<{ children: React.ReactNode }>`
    display: flex;
    flex-direction: column;
    justify-content: top;
    width: 50px;
    height: 100vh;
    background-color: ${primary};
`

export {
    MenuContainer
}

