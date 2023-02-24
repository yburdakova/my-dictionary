import React from "react";

import '../styles/DarkMode.css';
import '../styles/icons-font.css'


const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark-theme')
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light-theme')
    };

    const toggleTheme = (e) => {
            if (e.target.checked){ 
                setDarkMode()
            } else {
                setLightMode ()
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