import styled from "styled-components";
import { primary, secondary, terciary } from "../../../../Commons/colors";

const RowContainer = styled.tr<{ children: React.ReactNode }>`
    color: ${terciary};
    height: 2em;
    &:hover{
        background-color: ${primary};
        cursor: pointer;
    }
    &:active{
        background-color: ${secondary};
    }
`
type cellProps = {
    children: React.ReactNode,
    aligment?: 'left'|'center'|'right'
}
const CellContainer = styled.td<cellProps>`
    text-align: ${($props) => $props.aligment ?? 'left'};
    vertical-align: middle;
`

export {
    CellContainer, RowContainer
};

