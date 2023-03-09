
import { withSSRContext } from 'aws-amplify';
import { useRouter } from 'next/router';
import { Predictions, AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import { Song } from '../../src/models';
import { serializeModel } from '@aws-amplify/datastore/ssr';

import SongDetails from '../../components/songDetails';
import styles from '../../styles/Home.module.css';

type SongDetailsParams = {
  song: Song
}

export async function getStaticPaths() {
  const SSR = withSSRContext();
  const songs = await SSR.DataStore.query(Song);
  const paths = songs.map((song: any) => ({
    params: { id: song.id }
  }));

  return {
    fallback: true,
    paths
  };
}

export async function getStaticProps({ params }: any) {
  const SSR = withSSRContext();
  
  const song = await SSR.DataStore.query(Song, params.id);

  return {
    props: {
      song: serializeModel(song)
    }
  };
}

export default function SongDetailsParent({ song }: SongDetailsParams) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading&hellip;</h1>
      </div>
    );
  }
  
  Predictions.removePluggable('AmazonAIPredictionsProvider');
  Predictions.addPluggable(new AmazonAIPredictionsProvider());

  return (
    <div className={`${styles.main} ${styles.alignTop}`}>
      <SongDetails song={song}/>
    </div>
  );
}
