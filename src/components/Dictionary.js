import React from 'react';

const Dictionary = () => {
  


  const playAudio = (e) =>{
      let audio = new Audio();
      audio.volume = .25;
      audio.src = e.target.getAttribute('data-url');
      audio.play();
  };

  return (
      <div className="word__container">
          <div id="word" className="word__title"></div>
          <div id="phonetic" className="word__phonetic"></div>
          <div id="play" className='word__audio icon-icon_play' onClick={playAudio}></div>
      </div>   
  )
}

export default Dictionary;