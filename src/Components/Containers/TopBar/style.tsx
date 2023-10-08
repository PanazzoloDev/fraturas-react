import React from "react";
import styled from "styled-components";
import { primary, terciary } from "../../../Commons/colors";

const TopBarContainer = styled.div<{ children?: React.ReactNode }>`
    display: flex;
    justify-content: space-between;
    background-color: ${primary};
    box-shadow: 4px 4px 10px 10px rgba(0,0,0,0.1);
    box-sizing: border-box;
    padding: 0.5em;
    height: 80px;
    width: 100%;
`
const AppName = styled.h1<{ children?: React.ReactNode }>`
    color: ${terciary};
    font-size: 1em;
    padding: 0.8em;
    text-align: center;
    justify-items: center;
    text-shadow: 4px 4px 10px rgba(0,0,0,2);
    border-left: 1px dashed ${terciary};
    strong{
        font-weight: bold;
        font-size: 1.3;
        font-style: italic;
    }
`

export {
    AppName, TopBarContainer
};

