import React, {useState} from "react";

import './styles/App.css';

import Search from "./components/Search"
import Header from "./components/Header";
import Word from "./components/Word";

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

const App = () => {

  const [query, setQuery] = useState('def');
  const [results, setResults] = useState([]);

  const data = {
    word: results.map(item => item.word)[0],
    phonetic: results.map(item => item.phonetic)[0],
    audioLink:results.map(item => item.phonetics.filter(item => item.audio !== "")[0].audio)[0],
    meanings:[],
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
      <Search getUserWord={onSearchChange}
          submitUserWord={onSearchSubmit}
          value={query}
      />
      <Word word={data.word}
            phonetic={data.phonetic}
            audio={data.audioLink}
      />
    </div>
  )

}


export default App;
