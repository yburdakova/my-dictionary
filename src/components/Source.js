import React from 'react';

const Source = (props) => {
    return (
        <section>
            <div>Source</div>
            <div>{props.link}</div>
            <a href={props.link} target="_blank" className='icon-icon_external-link'></a>
        </section>
    );
};

export default Source;