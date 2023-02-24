import React from "react";

import '../styles/DarkMode.css';
import '../styles/icons-font.css'


const DarkMode = () => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    

    // darkThemeMq.matches? setDarkMode():setLightMode();
    
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark-theme')
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light-theme')
    };
    if(darkThemeMq.matches) {setDarkMode();} else {setLightMode ();}
    
    const toggleTheme = (e) => {
        if (!darkThemeMq.matches) {
            if (e.target.checked) setDarkMode();
            else setLightMode ();
        } else {
            if (e.target.checked) setLightMode();
            else setDarkMode ();
        }
    };

    return (
        <div className ="dark_mode">
            <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode_toggle"
            value=""
            onChange={toggleTheme}
            />
            <label
            className="dark_mode_label"
            htmlFor="darkmode_toggle"
            ></label>
            <div className="icon-icon_half-moon"></div>
        </div>
    )
}


export default DarkMode;