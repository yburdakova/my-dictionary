import React from 'react';
import '../styles/Source.css';
import '../styles/index.css'

const Source = (props) => {
    return (
        <section className='source__container'>
                <div className='source__title'>Source</div>
                <div className='source__text-link'><a href={props.link} target="_blank" >{props.link}</a></div>
                <a href={props.link}  className='icon-icon_external-link'></a>

        </section>
    );
};

export default Source;