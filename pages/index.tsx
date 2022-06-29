import { withSSRContext } from 'aws-amplify';
import { listSongs } from '../src/graphql/queries';
import SongCard from '../components/songCardLink';
import styles from '../styles/Home.module.css';

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

    return <div className={styles.main}>{songCards}</div>
  }
  return (
    <div className={styles.main}>No Songs!</div>
  );
}
