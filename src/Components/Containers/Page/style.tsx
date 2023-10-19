import styled from "styled-components";

const PageContainer = styled.div<{children: React.ReactNode}>`
    display: flex;
    flex-direction: column;
`
const PageBody = styled.div<{children: React.ReactNode}>`
    display: flex;
    flex-direction: row;
`
export {
    PageBody,
    PageContainer
};