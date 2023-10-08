import styled from "styled-components";
import { primary } from "../../Commons/colors";

type nodeProps = {
    children: object
};
type titleProps = {
    children: string
};
const LoginTitle = styled.h1<titleProps>`
    margin: 0px;
`
const Page = styled.div<nodeProps>`
    padding: 0px 40px;
    width: 280px;
    height: 100vh;
    background-color: ${ primary };
`

const ActionArea = styled.div<nodeProps>`
    display: flex;
    justify-content: space-between;
`

export
{
    ActionArea,
    LoginTitle,
    Page
}