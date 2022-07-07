
import { withSSRContext } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Predictions, { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import { Song, Album } from '../../src/models/index';
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
  const [showTranslation, setShowTranslation] = useState(false);
  const [translatedSong, setTranslatedSong] = useState({...song});

  const translate = async (translateFrom: string, translateTo: string) => {
    try {
      const titleTranslation = await Predictions.convert({
        translateText: {
          source: {
            text: song.title,
            language: translateFrom // defaults configured on aws-exports.js
            // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
          },
          targetLanguage: translateTo
        }
      });

      const lyricsTranslation = await Predictions.convert({
        translateText: {
          source: {
            text: song.lyrics,
            language: translateFrom
            // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
          },
          targetLanguage: translateTo
        }
      });

      let album = song.album;
      if (song.album) { 
        const albumTranslation = await Predictions.convert({
          translateText: {
            source: {
              text: song.album.title,
              language: translateFrom
              // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
            },
            targetLanguage: translateTo
          }
        });
        album = new Album({ title: albumTranslation.text });
      }
      
      const newTranslation = new Song({ title: titleTranslation.text, lyrics: lyricsTranslation.text, artist: song.artist, album: album, owner: song.owner });
      setTranslatedSong(newTranslation);
      setShowTranslation(true);
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
    } else { 
      setShowTranslation(false);
    }
  }

  return (
    <div className={`${styles.main} ${styles.alignTop}`}>
      <div className={styles.songTranslationParent}>
        <select name="translateFrom" onChange={handleSelectChange}>
          <option value="">-- Select One --</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="pt">Portuguese (Brazil)</option>
          <option value="en">English</option>
        </select>
        <SongCard song={song}></SongCard>
      </div>
      <div className={styles.songTranslationParent}>
        <select name="translateTo" onChange={handleSelectChange}>
          <option value="">-- Select One --</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="pt">Portuguese (Brazil)</option>
          <option value="en">English</option>
        </select>
        { showTranslation ? <SongCard song={translatedSong} allowEdit={false}></SongCard> : null }
      </div>
    </div>
  );
}
