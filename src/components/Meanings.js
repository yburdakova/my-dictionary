import React from 'react';
import '../styles/Meanings.css';

const Meanings = (props) => {
    
    return (
        
        <section className='meanings__container' >
            <div className='meanings__title'>{props.partOfSpeech}</div>
            <div className='meanings__subtitle'>Meanings</div>
            <ul>
                {props.definitions.map((item) => item.example ? <li className='meanings__defenition'>{item.definition}<div className='meanings__example'>{item.example}</div></li>:<li className='meanings__defenition'>{item.definition}</li>)}
            </ul>
            {props.synonyms.length ?  
            <div className='meanings__synonyms-container'>
                <div className='meanings__subtitle'>Synonyms</div>
                <div className='meanings__synonyms'>{props.synonyms.map((item) =><span className='meanings__synonym'>{item}</span>)}</div>
            </div>
            : <div></div>}
            
        </section>
        
    );
};

export default Meanings;