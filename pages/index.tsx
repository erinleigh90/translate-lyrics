import { withSSRContext } from 'aws-amplify';
import { listSongs } from '../src/graphql/queries';
import SongCard from '../components/songCardLink';

export async function getServerSideProps({ req }: any) {
  const SSR = withSSRContext({ req });
  const { data } = await SSR.API.graphql({ query: listSongs });

  return {
    props: {
      songs: data.listSongs.items
    }
  }
}

export default function Home({ songs }: any) {
  if(songs && songs.length > 0) {
    const songCards = songs.map((song: any) => <SongCard song={song} key={song.id}/>);

    return <div>{songCards}</div>
  }
  return (
    <div>No Songs!</div>
  );
}
