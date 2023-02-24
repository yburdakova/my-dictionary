import React, {useState} from "react";

import './styles/App.css';

import Search from "./components/Search"
import Header from "./components/Header";
import Word from "./components/Word";
import Meanings from "./components/Meanings";
import Source from "./components/Source";
import Error404 from "./components/Error404";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const fetchResults = async (query) => {
  try {
    const response = await fetch(`${API_URL}${query}`);
    const json = await response.json();
    return json;
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
  const [searchResult, setResults] = useState(null);
  const [found, setFound] = useState(null)
  const [emptyInput, setEmptyInput] = useState(true)

  const onSearchChange = (e) => {
    setQuery(e.target.value);
  };

 
  const onSearchSubmit = async (e) => {
    if (query === ''){
      setEmptyInput(false)
      const inputID = document.querySelector('.search__input');
      inputID.classList.add('woops-input');
    } else {
      setEmptyInput(true)
      const inputID = document.querySelector('.search__input');
      inputID.classList.remove('woops-input');
      e.preventDefault();
      const results = await fetchResults(query);
      if (Array.isArray(results)){
        setResults(results);
        setFound(true);
      } else {
        setFound(false);
        setResults(results);
      }
    }
  };

  return (
    <div className="App">
      <Header/>
      <Search onChange={onSearchChange}
              submitUserWord={onSearchSubmit}
              value={query}
      />
      {emptyInput
      ? <div>
        {found
        ? <div>
          <Word word={searchResult.map(item => item.word)[0]}
                phonetic={searchResult.map(item => item.phonetic)[0]}
                audio={searchResult.filter(item => item.phonetics.length).map(item =>item.phonetics.map(item=> item.audio).filter(item => item!=="")[0])[0]}
          />
          {searchResult.map(item=> item.meanings.map((item,i) => 
            <Meanings key={getUniqueId(i)} 
                      partOfSpeech={item.partOfSpeech} 
                      definitions={item.definitions}
                      synonyms={item.synonyms}
            />))}
          <Source link={searchResult.map(item => item.sourceUrls[0])[0]}/>
          </div>
        : <div>
          {found === null ? <div></div> : <Error404 title={searchResult.title} message={searchResult.message} resolution={searchResult.resolution}/>}
          </div>
        }
      </div>:<div className="woops"> Whoops, can’t be empty…</div>}
      
      
    </div>
  )

}


export default App;
