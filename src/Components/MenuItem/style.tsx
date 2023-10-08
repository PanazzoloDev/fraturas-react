import React from 'react'
import styled from 'styled-components'
import { primary, secondary } from '../../Commons/colors'

const MenuItemContainer = styled.button<{ children: React.ReactNode }>`
    display: flex;
    justify-content: center;
    color: white;
    background-color: ${primary};
    border: none;
    padding: 5px;
    margin: 2px 0px;
    &:hover{
        background-color: ${secondary};
    }
    &:active{
        background-color: ${primary};
    }
`

export {
    MenuItemContainer
}
