import React from "react";
import Navigation from "./Navigation";
import './../components/globalStyles/index.css';
import LineNavigation from "./LineNavigation";

const Header = (props) => {
    return (
        <>
            <LineNavigation></LineNavigation>
            <div className="wrapper">
                <Navigation></Navigation>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Header;