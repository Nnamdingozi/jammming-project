import React from "react";
import SearchBar from "./SearchBar/SearchBar.";
import SearchResults from "./searchResults/SearchResults";
import './App.css'

function App() {
  return (
   <>
   <h1><span style={{color:'beige'}} >JA</span><span style={{color:'rgb(235, 142, 208)', fontSize: '2.4rem'}}>MMM</span><span style={{color:'beige'}}>ING</span></h1>
   <SearchBar />
   <SearchResults />
   </>
  );
}

export default App;
