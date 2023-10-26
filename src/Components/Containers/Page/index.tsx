import React from "react";
import NavigationMenu from "../NavigationMenu";
import TopBar from "../TopBar";
import { PageBody, PageContainer } from "./style";
import NotifyCard from "../../Snakbars";

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
            <NotifyCard/>
        </PageContainer >
    )
}

export default Page;