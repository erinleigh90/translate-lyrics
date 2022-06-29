import { withSSRContext } from 'aws-amplify';
import { useContext } from "react";
import { UserContext } from "../../../utilities/userContextMethods";
import EditSong from '../../../components/editSong';
import { getSong, listArtists, listAlbums } from '../../../src/graphql/queries';
import styles from '../../../styles/Home.module.css';

export async function getServerSideProps(context: any) {
  const SSR = withSSRContext(context);
  
  const songResults = await SSR.API.graphql({
    query: getSong,
    variables: {
      id: context.params.id
    }
  });
  const artistResults = await SSR.API.graphql({ query: listArtists });
  const albumResults = await SSR.API.graphql({ query: listAlbums });

  return {
    props: {
      song: songResults.data.getSong,
      allArtists: artistResults.data.listArtists,
      allAlbums: albumResults.data.listAlbums
    }
  };
}

export default function Edit({song, allArtists, allAlbums}: any) {
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