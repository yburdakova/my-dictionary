import React from "react";
import '../styles/FontMode.css'

const FontMode = () => {

    const setSansFont = () => {
        document.querySelector("body").setAttribute('data-font', 'font-sans')
    };

    const setSerifFont = () => {
        document.querySelector("body").setAttribute('data-font', 'font-serif')
    };

    const setMonoFont = () => {
        document.querySelector("body").setAttribute('data-font', 'font-mono')
    };

    const changeFont = (e) => {

        if (e.target.value == "sans-font") setSansFont();
        else if (e.target.value == "serif-font") setSerifFont ();
        else setMonoFont();
    };

    return (
        <div className ="dark_mode">
            <select onChange={changeFont}>
                <option value="sans-font">Sans Serif</option>
                <option value="serif-font">Serif</option>
                <option value="mono-font">Mono</option>
            </select>
           
        </div>
    )
}


export default FontMode;