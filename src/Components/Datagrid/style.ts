import styled from "styled-components";
import { primary } from "../../Commons/colors";

const Table = styled.table<{ children: React.ReactNode }>`
    margin: 20px;
    background-color: ${primary};
    width: 95%;
    height: fit-content;
`

export {
    Table
};

