import React from 'react';

import '../styles/Search.css'


const Search = ({getUserWord, submitUserWord, value}) => {

        // const resultArr = [results[0]];
        // const getWord = resultArr.map(item => item.word)[0];
        // const getPhonetic = resultArr.map(item => item.phonetic)[0];
        // const getAudio = resultArr.map(item => item.phonetics.filter(item => item.audio !== "")[0].audio);
        

        // document.querySelector('#word').innerText = `${getWord}`;
        // document.querySelector('#phonetic').innerText = `${getPhonetic}`;
        // document.querySelector('#play').setAttribute('data-url', `${getAudio}`)
    
        return (
            <div className='search__container' >
                <input className='search__input' 
                        placeholder='Search for any word…' 
                        value={value || ''} 
                        onChange={e=> getUserWord(e)}
                        />
                <div className='icon-icon_search' 
                        onClick={e=> submitUserWord(e)}></div>
            </div>
        )
    
    }


export default Search;