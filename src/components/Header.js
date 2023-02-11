import React from "react";
import '../styles/Header.css';
import '../styles/icons-font.css';
import DarkMode from "./DarkMode";
import FontMode from "./FontMode";

const Header = () => {
    return (
        <header>
            <div className="header__logo icon-icon_book"></div>
                <div className="header__actions">
                    <FontMode/>
                    <div className="line"></div>
                    <DarkMode/>
                </div>
        </header>
)}

export default Header;