import { useContext, useState } from "react";
import { UserContext } from "../utilities/userContextMethods";
import styles from '../styles/Home.module.css';

export default function AddSong() {
  const user = useContext(UserContext);
  const authenticated = (user != null);

  const newSongCard = (
    <div className={styles.card}>
      <h2>New Song</h2>
      <form className={styles.inputFields}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="artist" placeholder="Artist" />
        <input type="text" name="album" placeholder="Album" />
        <input type="text" name="lyrics" placeholder="Lyrics" />
      </form>
    </div>
  );

  return (
    <div>
      {(authenticated) ? newSongCard : <div>Oops! Please log in to add a song!</div>}
    </div>
  );
}