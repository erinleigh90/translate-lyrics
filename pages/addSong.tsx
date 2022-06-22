import { API } from 'aws-amplify';
import { useContext, useState } from "react";
import { UserContext } from "../utilities/userContextMethods";
import { createSong } from '../src/graphql/mutations';

import styles from '../styles/Home.module.css';

export default function AddSong() {
  const user = useContext(UserContext);
  const authenticated = (user != null);

  const [songTitle, setSongTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [albumTitle, setAlbumTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleUserInput = (event: any) => {
    const inputName = event.target.name;

    switch (inputName) {
      case 'title':
        setSongTitle(event.target.value);
        break;
      case 'artist':
        setArtistName(event.target.value);
        break;
      case 'album':
        setAlbumTitle(event.target.value);
        break;
      case 'lyrics':
        setLyrics(event.target.value);
        break;
    }
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const songId = songTitle.toLowerCase().replaceAll('[^\\p{L}\\p{Nd}]+', '-') + artistName.toLowerCase().replaceAll('[^\\p{L}\\p{Nd}]+', '-');

    try {
      const { data }: any = await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: createSong,
        variables: {
          input: {
            id: songId,
            title: songTitle,
            lyrics: lyrics
          }
        }
      });

      window.location.href = `/posts/${data.createSong.id}`;
    } catch (e: any) {
      console.error(...e.errors);
      throw new Error(e.errors[0].message);
    }
  }

  const newSongCard = (
    <div className={styles.card}>
      <h2>New Song</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputFields}>
          <input type="text" name="title" placeholder="Title" onChange={handleUserInput} />
          <input type="text" name="artist" placeholder="Artist" onChange={handleUserInput} />
          <input type="text" name="album" placeholder="Album" onChange={handleUserInput} />
        </div>
        <div className={styles.lyricsParent}>
          <textarea name="lyrics" placeholder="Lyrics" onChange={handleUserInput} />
        </div>
        <div>
          <input className={styles.primaryButton} type="submit" name="saveSong" value="Save" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      {(authenticated) ? newSongCard : <div>Oops! Please log in to add a song!</div>}
    </div>
  );
}