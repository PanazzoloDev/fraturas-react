import styled from "styled-components";
import { primary, secondary, terciary } from "../../../../Commons/colors";

const TableHeader = styled.tr<{children: React.ReactNode}>`
    background-color: ${primary};
    text-align: center;
    color: ${terciary};
    height: 2em;
`
const HeaderCell = styled.td<{children: React.ReactNode}>`
    vertical-align: middle;
    border-left: 1px solid ${secondary};
`
export{
    TableHeader,
    HeaderCell
}