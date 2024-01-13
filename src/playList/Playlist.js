import React from "react";
import styles from "./PlayList.module.css"

 export default function PlayList() {
    return (
        <div className={styles.playlist}>
        <input className={styles.listinput} type="text" placeholder="enter Playlist name"></input>
    <div></div>
<button className={styles.spotifybtn}>save to spotify</button>
        </div>
        
        )
 }