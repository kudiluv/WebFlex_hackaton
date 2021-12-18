import React from "react";
import Navigation from "./Navigation";
import './../components/globalStyles/index.css';
import LineNavigation from "./LineNavigation";
import { useSelector } from "react-redux";

const Header = (props) => {
    const menuActive = useSelector(state => state.menuReducer.active);
    return (
        <>
            <LineNavigation></LineNavigation>
            <div className="wrapper">
                <nav className={`nav ${menuActive ? 'nav_unactive': ''}`}>
                    <Navigation></Navigation>
                </nav>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Header;