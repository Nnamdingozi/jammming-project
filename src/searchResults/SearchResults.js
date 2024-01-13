import React from "react";
import styles from "./SearchResults.module.css";
import { data } from "../data"

export default function SearchResults(){
    const songs = data?.map(song => {
        return (<li key={song.id}>
            <p>song title: {song.name}</p>
            <p> Artist: {song.artist}</p>
            <p>Album: {song.album}</p>
            <button className={styles.btn}>+</button>
            </li>)
    })
    return (
        <div className={styles.searchResults}>
    <h3>Search Results</h3>
            <ul>{songs}</ul>

        </div>
    )
}