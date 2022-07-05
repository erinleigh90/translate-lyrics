import { useState } from "react";
import { DataStore } from 'aws-amplify';
import { Song, Artist, Album } from '../src/models/index';
import { insertAlbum, insertSong, editSong } from '../utilities/databaseCrudMethods';

import styles from '../styles/Home.module.css';

type EditParams = {
  song: Song,
  handleSuccess: Function,
  allArtists: [Artist],
  allAlbums: [Album]  
}

export default function EditSong({ song, handleSuccess, allArtists, allAlbums }: EditParams) {
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
      let artist: Artist | null = null;
      let album: Album | null = null;

      if(artistName) {
        let artistMatches: Artist[] = allArtists.filter((artist: any) => artist.name == artistName);
        
        if(artistMatches.length == 0) {
          artist = await DataStore.save(new Artist({name: artistName}));
          console.log(artist);
        } else {
          artist = artistMatches[0];
        }
      }

      if(albumTitle) {
        let albumMatches: Album[] = allAlbums.filter((album: any) => album.title == albumTitle);

        if(albumMatches.length == 0) {
          album = await DataStore.save(new Album({title: albumTitle, artist: artist}));
          console.log(album);
        } else {
          album = albumMatches[0];
        }
      }

      if(song) {
        song = await DataStore.save(Song.copyOf(song, updated => {
          updated.title = songTitle;
          updated.lyrics = lyrics;
          updated.artist = artist;
          updated.album = album;
        }));
      } else {
        song = await DataStore.save(new Song({title: songTitle, lyrics: lyrics, artist: artist, album: album}));
        console.log(song);
      }

      //handleSuccess(song.id);
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