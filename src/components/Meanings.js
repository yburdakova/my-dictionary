import React from 'react';
import '../styles/Meanings.css';

const Meanings = (props) => {
    
    return (
        
        <section>
            <div>{props.partOfSpeech}</div>
            <div>Meanings</div>
            <ul>
                {props.definitions.map((item) => item.example ? <li>{item.definition}<div className='meanings__example'>{item.example}</div></li>:<li>{item.definition}</li>)}
            </ul>
            {props.synonyms.length ?  
            <div>
                <div>Synonyms</div>
                <div>{props.synonyms.map((item) =><span>{item}</span>)}</div>
            </div>
            : <div></div>}
            
        </section>
        
    );
};

export default Meanings;