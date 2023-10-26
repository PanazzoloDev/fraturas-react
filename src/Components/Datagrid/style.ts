import styled from "styled-components";
import { primary, secondary } from "../../Commons/colors";

const DatagridContainer = styled.div<{ children: React.ReactNode }>`
    width: 95%;
    height: fit-content;
    padding: 25px;
    background-color: ${secondary};
    margin: 20px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`
const ToolbarContainer = styled.div<{ children?: React.ReactNode }>`
    display:flex;
    height:40px;
    justify-content: space-between;
    margin: 0px 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${primary};
`

const Table = styled.table<{ children: React.ReactNode }>`
    background-color: ${secondary + '1A'};
    width: 100%;
    height: fit-content;
`

export {
    DatagridContainer, Table, ToolbarContainer
};

