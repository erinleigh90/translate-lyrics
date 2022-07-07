import { useState } from "react";
import { DataStore } from 'aws-amplify';
import { Song } from '../src/models';
import styles from '../styles/Home.module.css';

export default function HeaderSearch() {
  const [songTitle, setSongTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [albumTitle, setAlbumTitle] = useState('');

  const handleInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
    switch (event.currentTarget.name) { 
      case "song":
        setSongTitle(event.currentTarget.value);
        break;
      case "artist":
        setArtistName(event.currentTarget.value);
        break;
      case "album":
        setAlbumTitle(event.currentTarget.value);
    }
  }
  
  const handleSearch = async () => {
    const songs = await DataStore.query(Song);
    console.log('ALL SONGS: ', songs);
  }

  return (
    <div className={`${styles.headerInput} ${styles.headerSearchBox}`}>
      <input type="text" name="song" placeholder="Song Title" onChange={handleInput}/>
      <input type="text" name="artist" placeholder="Artist" onChange={handleInput}/>
      <input type="text" name="album" placeholder="Album" onChange={handleInput}/>
      <div className={styles.searchButton} onClick={handleSearch}>
        <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
          <g fill="none">
            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}