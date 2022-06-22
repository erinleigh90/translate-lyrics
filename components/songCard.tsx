import { withSSRContext } from 'aws-amplify';
import { getSong } from '../src/graphql/queries';
import styles from '../styles/Home.module.css';

export async function getServerSideProps({ req }: any) {
  const SSR = withSSRContext({ req })
  const { data } = await SSR.API.graphql({ query: getSong });

  return {
    props: {
      songs: data.listSongs.items
    }
  }
}

export default function SongCard({ song, compact = false }: any) {
  return (
    <div className={styles.card} key={song.id}>
      <h3>{song.title}</h3>
      <div className={`${styles.lyricsDiv} ${(compact) ? styles.compact : null}`}>{song.lyrics}</div>
      {(compact) ? <div>...</div> : null}
    </div>
  );
}