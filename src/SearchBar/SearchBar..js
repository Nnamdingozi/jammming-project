import React from "react";
import styles from './SearchBar.module.css';



export default function SearchBar(props) {
    

  
  
    return (
        <div className={styles.banner}>
            <input type="text" className={styles.input} value={props.term} onChange={props.handleSearchInput}></input>
            <button
             className={styles.search} 
             
              >Search</button>
        </div>

    )
}