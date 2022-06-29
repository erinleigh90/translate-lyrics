import { withSSRContext } from 'aws-amplify';
import { useContext } from "react";
import { UserContext } from "../../../utilities/userContextMethods";
import EditSong from '../../../components/editSong';
import { getSong, listArtists, listAlbums } from '../../../src/graphql/queries';

export async function getServerSideProps(context: any) {
  const SSR = withSSRContext(context);
  
  const { songData } = await SSR.API.graphql({
    query: getSong,
    variables: {
      id: context.params.id
    }
  });
  const {artistData} = await SSR.API.graphql({ query: listArtists });
  const {albumData} = await SSR.API.graphql({ query: listAlbums });

  return {
    props: {
      song: songData.getSong,
      allArtists: artistData.listArtists,
      allAlbums: albumData.listAlbums
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
    <div>
      {(authenticated) ? <EditSong song={song} handleSuccess={handleSuccess} allArtists={allArtists} allAlbums={allAlbums}/> : <div>Oops! Please log in to add a song!</div>}
    </div>
  );
}