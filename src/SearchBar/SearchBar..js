import React from "react";
import styles from './SearchBar.module.css';
import { useReducer } from "react";
import { searchTermReducer } from '../reducer';
// import { useSelector } from 'react'


export default function SearchBar({props}) {
    const initialState = {term: ""};
  const [state, dispatch] = useReducer(searchTermReducer, initialState );
// const term = useSelector((state) => state.term)


  
  function handleSearchInput(event) {
    dispatch({
      type: 'setSearchTerm',
      payload: event.target.value
    })
  }
    return (
        <div className={styles.banner}>
            <input type="text" className={styles.input} value={state.term} onChange={handleSearchInput}></input>
            <button
             className={styles.search} 
             onClick={handleSearchInput}
              >Search</button>
        </div>

    )
}