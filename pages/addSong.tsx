import { withSSRContext } from 'aws-amplify';
import { serializeModel } from '@aws-amplify/datastore/ssr';
import { useContext } from "react";
import { UserContext } from "../utilities/userContextMethods";
import EditSong from '../components/editSong';
import styles from '../styles/Home.module.css';
import { Album, Artist } from '../src/models';

type AddSongParams = {
  allArtists: [Artist]
  allAlbums: [Album]
}

export async function getServerSideProps(context: any) {
  const SSR = withSSRContext(context);
  
  const artists: [Artist] = await SSR.DataStore.query(Artist);
  const albums: [Album] = await SSR.DataStore.query(Album);

  return {
    props: {
      allArtists: serializeModel(artists),
      allAlbums: serializeModel(albums)
    }
  };
}

export default function AddSong({ allArtists, allAlbums }: AddSongParams) {
  const user = useContext(UserContext);
  const authenticated = (user != null);

  const handleSuccess = (songId: string) => {
    window.location.href = `/songs/${songId}`;
  }

  return (
    <div className={styles.main}>
      {(authenticated) ? <EditSong handleSuccess={handleSuccess} allArtists={allArtists} allAlbums={allAlbums}/> : <div>Oops! Please log in to add a song!</div>}
    </div>
  );
}