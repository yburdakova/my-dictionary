import React from 'react';
import '../styles/FontSelect.css'

const FontSelect = ()=> {

    let fontSelection = '';
    
    const setSansFont = () => {
        document.querySelector("body").setAttribute('data-font', 'font-sans')
    };

    const setSerifFont = () => {
        document.querySelector("body").setAttribute('data-font', 'font-serif')
    };

    const setMonoFont = () => {
        document.querySelector("body").setAttribute('data-font', 'font-mono')
    };
    const openSelect = (e) => {
        const selectList = document.querySelector('.select__list');
        selectList.classList.toggle('select-visible');
        document.querySelectorAll('.select__list-item').forEach(item => item.addEventListener('click', function () {
            document.querySelector('.select__button').innerText =this.innerText;
            fontSelection = this.dataset.value;
            selectList.classList.remove('select-visible');
            if (fontSelection === "sans-font") setSansFont();
            else if (fontSelection === "serif-font") setSerifFont ();
            else setMonoFont();
        }))
        
    }

    return (
        <div className ="select">
            <div className="select__dropdown">
                <div className='select__button-container' onClick={openSelect}>
                    <button className="select__button" >Sans Serif</button>
                    <div className="icon-icon-arrow"> </div>
                </div>
                <ul className="select__list">
                    <li className="select__list-item" data-value="sans-font">Sans Serif</li>
                    <li className="select__list-item" data-value="serif-font">Serif</li>
                    <li className="select__list-item" data-value="mono-font">Mono</li>
                </ul>
                <input type="text" name="text-category" value="" className='select__input-value'/>
            </div>
        </div>
    )
}

export default FontSelect;