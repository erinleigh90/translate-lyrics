import { withSSRContext } from 'aws-amplify';
import { useContext } from "react";
import { UserContext } from "../../../utilities/userContextMethods";
import EditSong from '../../../components/editSong';
import { Song, Artist, Album } from '../../../src/models';
import { serializeModel } from '@aws-amplify/datastore/ssr';
import styles from '../../../styles/Home.module.css';

export async function getServerSideProps(context: any) {
  const SSR = withSSRContext(context);
  
  const song = await SSR.DataStore.query(Song, context.params.id);
  const artists = await SSR.DataStore.query(Artist);
  const albums = await SSR.DataStore.query(Album);

  return {
    props: {
      song: serializeModel(song),
      allArtists: serializeModel(artists),
      allAlbums: serializeModel(albums)
    }
  };
}

export default function Edit({song, allArtists, allAlbums}: any) {
  console.log(song, allArtists, allAlbums);
  const user = useContext(UserContext);
  const authenticated = (user != null);

  const handleSuccess = (songId: string) => {
    window.location.href = `/songs/${songId}`;
  }

  return (
    <div className={styles.main}>
      {(authenticated) ? <EditSong song={song} handleSuccess={handleSuccess} allArtists={allArtists} allAlbums={allAlbums}/> : <div>Oops! Please log in to add a song!</div>}
    </div>
  );
}