import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
    children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}

export default Layout;
