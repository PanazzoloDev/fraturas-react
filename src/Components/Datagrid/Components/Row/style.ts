import styled from "styled-components";
import { primary, secondary } from "../../../../Commons/colors";

const RowContainer = styled.tr<{ children: React.ReactNode }>`
    color: ${primary};
    height: 2em;
    &:hover{
        background-color: ${primary}80;
        color: ${secondary};
        //cursor: pointer;
    }
    &:active{
        background-color: ${secondary};
    }
`
type cellProps = {
    children: React.ReactNode,
    aligment?: 'left' | 'center' | 'right'
}
const CellContainer = styled.td<cellProps>`
    padding: 2px;
    text-align: ${($props) => $props.aligment ?? 'left'};
    vertical-align: middle;
`

export {
    CellContainer, RowContainer
};

