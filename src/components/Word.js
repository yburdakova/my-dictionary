import React from 'react';

const Word = ({word, phonetic, audio}) => {
    
    const playAudio = (e) =>{
        let audio = new Audio();
        audio.volume = .25;
        audio.src = e.target.getAttribute('data-url');
        audio.play();
    };

    return (
        <div className="word__container">
            <div id="word" className="word__title">{word}</div>
            <div id="phonetic" className="word__phonetic">{phonetic}</div>
            <div id="play" className='word__audio icon-icon_play' data-url={audio} onClick={playAudio}></div>
        </div>   
    )
};

export default Word;