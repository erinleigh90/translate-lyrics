import { useState } from "react";
import { DataStore } from 'aws-amplify';
import { Song, Artist, Album } from '../src/models';

import styles from '../styles/Home.module.css';

type EditComponentParams = {
  song?: Song,
  handleSuccess: Function,
  allArtists: [Artist],
  allAlbums: [Album]  
}

export default function EditSong({ song, handleSuccess, allArtists, allAlbums }: EditComponentParams) {
  const [songTitle, setSongTitle] = useState((song) ? song.title : '');
  const [artistName, setArtistName] = useState((song && song.artist) ? song.artist.name : '');
  const [albumTitle, setAlbumTitle] = useState((song && song.album) ? song.album.title : '');
  const [lyrics, setLyrics] = useState((song) ? song.lyrics : '');

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputName = event.currentTarget.name;

    switch (inputName) {
      case 'title':
        setSongTitle(event.currentTarget.value);
        break;
      case 'artist':
        setArtistName(event.currentTarget.value);
        break;
      case 'album':
        setAlbumTitle(event.currentTarget.value);
        break;
      case 'lyrics':
        setLyrics(event.currentTarget.value);
        break;
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(artistName, albumTitle, songTitle);

    try {
      let artist: Artist | null = null;
      let album: Album | null = null;

      if(artistName) {
        let artistMatches: Artist[] = allArtists.filter((artist: any) => artist.name == artistName);
        
        if(artistMatches.length == 0) {
          artist = await DataStore.save(new Artist({name: artistName}));
        } else {
          artist = artistMatches[0];
        }
      }

      if(albumTitle) {
        let albumMatches: Album[] = allAlbums.filter((album: any) => album.title == albumTitle);

        if(albumMatches.length == 0) {
          album = await DataStore.save(new Album({title: albumTitle, artist: artist}));
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