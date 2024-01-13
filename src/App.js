import React from "react";
import SearchBar from "./SearchBar/SearchBar.";
import SearchResults from "./searchResults/SearchResults";
import './App.css';
import PlayList from "./playList/Playlist";
import { useReducer } from "react";
import { searchTermReducer } from './reducer';



function App() {
  const initialState = {term: ""};
  const [state, dispatch] = useReducer(searchTermReducer, initialState );

  function handleSearchInput(event) {
    dispatch({
      type: 'setSearchTerm',
      payload: event.target.value
    })
  }


  return (
   <div className="banner">
   <h1><span style={{color:'beige'}} >JA</span><span style={{color:'rgb(235, 142, 208)', fontSize: '2.4rem'}}>MMM</span><span style={{color:'beige'}}>ING</span></h1>
   <SearchBar handleSearchInput={handleSearchInput} term={state.term} />
   <div className="container">
   <SearchResults />
   <PlayList />
   </div>
   
   </div>
  );
}

export default App;
