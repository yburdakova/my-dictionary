import React, {useState} from "react";

import './styles/App.css';

import Search from "./components/Search"
import Header from "./components/Header";
import Word from "./components/Word";
import Meanings from "./components/Meanings";
import Source from "./components/Source";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const fetchResults = async (query) => {
  try {
    const response = await fetch(`${API_URL}${query}`);
    const json = await response.json();
    return json || [];
  } catch (e) {
    throw new Error(e);
  }
};

let id = 0;
export function getUniqueId(i) {
  return (id++ + i);
}

const App = () => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const data = {
    word: results.map(item => item.word)[0],
    phonetic: results.map(item => item.phonetic)[0],
    audioLink:results.filter(item => item.phonetics.length).map(item =>item.phonetics.map(item=> item.audio).filter(item => item!=="")[0])[0],
  }


  const onSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  };

  return (
    <div className="App">
      <Header/>
      <Search onChange={onSearchChange}
          submitUserWord={onSearchSubmit}
          value={query}
      />
      <Word word={data.word}
            phonetic={data.phonetic}
            audio={data.audioLink}
      />
      {results.map(item=> item.meanings.map((item,i) => 
        <Meanings key={getUniqueId(i)} 
                  partOfSpeech={item.partOfSpeech} 
                  definitions={item.definitions}
                  synonyms={item.synonyms}
        />))}
      <Source link={results.map(item => item.sourceUrls[0])[0]}/>
    </div>
  )

}


export default App;
