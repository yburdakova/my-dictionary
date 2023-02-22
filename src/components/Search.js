import React from 'react';

import '../styles/Search.css'


const Search = ({onChange, submitUserWord, value}) => {

    
        return (
            <div className='search__container' >
                <input className='search__input' 
                        placeholder='Search for any word…' 
                        value={value || ''} 
                        onChange={e => onChange(e)}
                        />
                <div className='icon-icon_search' 
                        onClick={e => submitUserWord(e)}></div>
            </div>
        )
    
    }


export default Search;