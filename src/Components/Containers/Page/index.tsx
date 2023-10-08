import React from "react";
import NavigationMenu from "../NavigationMenu";
import TopBar from "../TopBar";
import { PageBody } from "./style";

type pageProps = {
    children?: React.ReactNode
}

const Page = (
    props: pageProps
) => {
    return (
        <div>
            <TopBar />
            <PageBody>
                <NavigationMenu />
                {props.children}
            </PageBody >
        </div >
    )
}

export default Page;