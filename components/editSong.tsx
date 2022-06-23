import { API } from 'aws-amplify';
import { useState } from "react";
import { createSong } from '../src/graphql/mutations';

import styles from '../styles/Home.module.css';

export default function EditSong({ song, handleSuccess }: any) {

  const [songTitle, setSongTitle] = useState((song) ? song.title : '');
  const [artistName, setArtistName] = useState((song && song.artist) ? song.artist.name : '');
  const [albumTitle, setAlbumTitle] = useState((song && song.album) ? song.album.title : '');
  const [lyrics, setLyrics] = useState((song) ? song.lyrics : '');

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

      handleSuccess(data.createSong.id);
    } catch (e: any) {
      console.error(...e.errors);
      throw new Error(e.errors[0].message);
    }
  }

  return (
    <div className={styles.card}>
      <h2>{(song) ? 'Edit Song' : 'New Song'}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputFields}>
          <input type="text" name="title" placeholder="Title" onChange={handleUserInput} value={songTitle} required />
          <input type="text" name="artist" placeholder="Artist" onChange={handleUserInput} value={artistName} />
          <input type="text" name="album" placeholder="Album" onChange={handleUserInput} value={albumTitle} />
        </div>
        <div className={styles.lyricsParent}>
          <textarea name="lyrics" placeholder="Lyrics" onChange={handleUserInput} value={lyrics} required />
        </div>
        <div>
          <input className={styles.primaryButton} type="submit" name="saveSong" value="Save" />
        </div>
      </form>
    </div>
  );
}