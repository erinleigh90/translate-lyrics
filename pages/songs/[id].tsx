
import { withSSRContext } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Predictions, { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import { Song } from '../../src/models/index';
import { serializeModel } from '@aws-amplify/datastore/ssr';

import SongCard from '../../components/songCard';
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

export default function SongDetails({ song }: SongDetailsParams) {
  Predictions.removePluggable('AmazonAIPredictionsProvider');
  Predictions.addPluggable(new AmazonAIPredictionsProvider());
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading&hellip;</h1>
      </div>
    );
  }

  const translate = async () => {
    try {
      const translationResult = await Predictions.convert({
        translateText: {
          source: {
            text: song.lyrics,
            //language: 'fr' // defaults configured on aws-exports.js
            // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
          },
          //targetLanguage:'en'
        }
      });
      console.log(translationResult);
    } catch (e: any) {
      console.log(e);
    }
  }

  const [translatedLyrics, setTranslatedLyrics] = useState('');

  useEffect(() => {
    translate();
  }, []);

  return (
    <div className={styles.main}><SongCard song={song}></SongCard></div>
  );
}
