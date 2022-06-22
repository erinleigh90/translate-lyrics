import { withSSRContext } from 'aws-amplify';
import { listSongs } from '../src/graphql/queries';
import SongCard from '../components/songCard';

export async function getServerSideProps({ req }: any) {
  const SSR = withSSRContext({ req })
  const { data } = await SSR.API.graphql({ query: listSongs });

  return {
    props: {
      songs: data.listSongs.items
    }
  }
}

export default function Home({ songs }: any) {
  const getSongComponents = () => {
    let songCards = [];
    for (let song of songs) {
      songCards.push(SongCard({ song }));
    }
    return <div>{songCards}</div>;
  }

  return (
    <div>
      {(songs && songs.length > 0) ?
        getSongComponents()
        : <div>No Songs!</div>}
    </div>
  );
}
