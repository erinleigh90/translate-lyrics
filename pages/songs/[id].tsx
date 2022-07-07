
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
  const [translateFrom, setTranslateFrom] = useState('fr');
  const [translateTo, setTranslateTo] = useState('en');
  const [showTranslation, setShowTranslation] = useState(true);
  const [translatedSong, setTranslatedSong] = useState({...song});

  const translate = async (translateFrom: string, translateTo: string) => {
    try {
      const translationResult = await Predictions.convert({
        translateText: {
          source: {
            text: song.lyrics,
            language: translateFrom // defaults configured on aws-exports.js
            // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
          },
          targetLanguage: translateTo
        }
      });
      console.log(translationResult);
      const newTranslation = new Song({ title: song.title, album: song.album, artist: song.artist, lyrics: translationResult.text, owner: song.owner });
      setTranslatedSong(newTranslation);
    } catch (e: any) {
      console.log(e);
    }
  }

  useEffect(() => {
    translate('fr', 'en');
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let fromLangauge: string | null = translateFrom;
    let toLanguage: string | null = translateTo;
    
    switch (event.currentTarget.name) { 
      case "translateFrom":
        fromLangauge = event.currentTarget.value;
        setTranslateFrom(fromLangauge);
        break;
      case "translateTo":
        toLanguage = event.currentTarget.value;
        setTranslateTo(toLanguage);
        break;
    }
    if (fromLangauge && toLanguage) {
      console.log('translating');
      translate(fromLangauge, toLanguage);
      setShowTranslation(true);
    } else { 
      setShowTranslation(false);
    }
  }

  return (
    <div className={styles.main}>
      <div>
        <select name="translateFrom" onChange={handleSelectChange}>
          <option value="">-- Select One --</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="en">English</option>
        </select>
        <SongCard song={song}></SongCard>
      </div>
      <div>
        <select name="translateTo" onChange={handleSelectChange}>
          <option value="">-- Select One --</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="en">English</option>
        </select>
        { showTranslation ? <SongCard song={translatedSong} allowEdit={false}></SongCard> : null }
      </div>
    </div>
  );
}
