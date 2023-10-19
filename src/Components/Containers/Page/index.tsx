import React from "react";
import NavigationMenu from "../NavigationMenu";
import TopBar from "../TopBar";
import { PageBody, PageContainer } from "./style";

type pageProps = {
    children?: React.ReactNode
}

const Page = (
    props: pageProps
) => {
    return (
        <PageContainer>
            <TopBar />
            <PageBody>
                <NavigationMenu />
                {props.children}
            </PageBody >
        </PageContainer >
    )
}

export default Page;