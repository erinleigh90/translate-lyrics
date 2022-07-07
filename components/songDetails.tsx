
import { useState, useEffect } from 'react';
import Predictions from '@aws-amplify/predictions';
import { Song, Album } from '../src/models';

import SongCard from './songCard';
import styles from '../styles/Home.module.css';

type SongDetailsParams = {
  song: Song
}

export default function SongDetails({ song }: SongDetailsParams) {
  const [translateFrom, setTranslateFrom] = useState('fr');
  const [translateTo, setTranslateTo] = useState('en');
  const [showTranslation, setShowTranslation] = useState(false);
  const [translatedSong, setTranslatedSong] = useState({ ...song });

  useEffect(() => {
    translate('fr', 'en');
  }, []);

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
        <select name="translateFrom" onChange={handleSelectChange} value={translateFrom}>
          <option value="">-- Select One --</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="pt">Portuguese (Brazil)</option>
          <option value="en">English</option>
        </select>
        <SongCard song={song}></SongCard>
      </div>
      <div className={styles.songTranslationParent}>
        <select name="translateTo" onChange={handleSelectChange} value={translateTo}>
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
