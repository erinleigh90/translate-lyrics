import { useState } from "react";
import { insertArtist, insertAlbum, insertSong, editSong } from '../utilities/databaseCrudMethods';

import styles from '../styles/Home.module.css';

export default function EditSong({ song, handleSuccess, allArtists, allAlbums }: any) {
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
    console.log(artistName, albumTitle, songTitle);

    try {
      let artistId:string | null = null;
      let albumId:string | null = null;

      if(artistName) {
        let artistMatches: any = allArtists.filter((artist: any) => artist.name == artistName);
        let artist: any;
        
        if(!artistMatches || artistMatches.length == 0) {
          artist = await insertArtist(artistName);
          console.log(artist);
        } else {
          artist = artistMatches[0];
        }
        artistId = artist.id;
      }

      if(albumTitle) {
        let albumMatches: any = allAlbums.filter((album: any) => album.title == albumTitle);
        console.log(albumMatches);
        let album: any;
        if(!albumMatches || albumMatches.length == 0) {
          album = await insertAlbum(albumTitle, artistId);
        } else {
          album = albumMatches[0];
        }
        albumId = album.id;
      }

      if(song) {
        song = await editSong(song.id, songTitle, lyrics, artistId, albumId);
      } else {
        song = await insertSong(songTitle, lyrics, artistId, albumId);
      }

      handleSuccess(song.id);
    } catch (e: any) {
      console.log(e);
      // console.error(...e.errors);
      // throw new Error(e.errors[0].message);
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