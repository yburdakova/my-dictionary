import React from 'react';
import '../styles/Search.css'
import { useState } from 'react';

const getData = async (query) => {
    try {
        const userWord = document.querySelector(".search__input").value;
        const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
        const requestURL = `${apiURL}`+`${userWord}`;

        const response = await fetch (requestURL);
        const json = await response.json();
        return json;
    } catch (e) {
        throw new Error(e);
    }
    
}
const Word = () => {

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

const DefenitionBlock = (partOfSpeech) =>{
    return (
        <div>
            <div className='defenition__title'>{partOfSpeech}</div>
            <div>Meaning</div>
            <DefenitionList/>

        </div>
    )
}
const DefenitionList = () =>{
    return (
        <ul>
            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
        </ul>
    )
}

const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const onSearchSubmit = async (e) => {
        e.preventDefault();
        const results = await getData(query);
        setResults(results);
        
        const resultArr = [results[0]];
        const getWord = resultArr.map(item => item.word)[0];
        const getPhonetic = resultArr.map(item => item.phonetic)[0];
        const getAudio = resultArr.map(item => item.phonetics.filter(item => item.audio !== "")[0].audio);
        const getPartOfSpeech = resultArr[0].meanings;
           

        console.log(results.map(item => item.meanings.map((item)=>item.partOfSpeech)))

        document.querySelector('#word').innerText = `${getWord}`;
        document.querySelector('#phonetic').innerText = `${getPhonetic}`;
        document.querySelector('#play').setAttribute('data-url', `${getAudio}`)
    };
    
        return (
            <div className='search__container'>
                <input className='search__input' placeholder='Search for any word…' onChange={onSearchChange}/>
                <div className='icon-icon_search' onClick={onSearchSubmit}></div>
                <Word/>
                
                <div>{results.map(item => item.meanings.map(item=><DefenitionBlock partOfSpeech={item.partOfSpeech}/>))}</div>
                <div>partOfSpeech name</div>
                <div>list of defenotions</div>
                
                <div>source</div>
                
            </div>
        );
    
    }


export default Search;