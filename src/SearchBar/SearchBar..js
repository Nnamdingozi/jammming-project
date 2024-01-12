import React from "react";
import styles from './SearchBar.module.css'


export default function SearchBar() {
    return (
        <div className={styles.banner}>
            <input type="text" className={styles.input}></input>
            <button className={styles.search} >Search</button>
        </div>

    )
}