import { withSSRContext } from 'aws-amplify';
import { useContext } from "react";
import { UserContext } from "../utilities/userContextMethods";
import EditSong from '../components/editSong';
import { listArtists, listAlbums } from '../src/graphql/queries';

export async function getServerSideProps(context: any) {
  const SSR = withSSRContext(context);
  
  const artistResults = await SSR.API.graphql({ query: listArtists });
  const albumResults = await SSR.API.graphql({ query: listAlbums });

  return {
    props: {
      allArtists: artistResults.data.listArtists.items,
      allAlbums: albumResults.data.listAlbums.items
    }
  };
}

export default function AddSong({allArtists, allAlbums}: any) {
  const user = useContext(UserContext);
  const authenticated = (user != null);

  const handleSuccess = (songId: string) => {
    window.location.href = `/songs/${songId}`;
  }

  return (
    <div>
      {(authenticated) ? <EditSong handleSuccess={handleSuccess} allArtists={allArtists} allAlbums={allAlbums}/> : <div>Oops! Please log in to add a song!</div>}
    </div>
  );
}