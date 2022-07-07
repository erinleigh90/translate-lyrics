import { useContext } from "react";
import Link from 'next/link';
import { Song } from '../src/models';
import { UserContext } from "../utilities/userContextMethods";

import styles from '../styles/Home.module.css';

type SongCardParams = {
  song: Song & {owner?: string}
  compact?: boolean
  allowEdit?: boolean
}

export default function SongCard({ song, compact = false, allowEdit = true }: SongCardParams) {
  const user: any = useContext(UserContext);
  const userIsOwner = (user != null) ? user.username == song.owner : false;

  const editIcon = (
    <Link href={`/songs/${song.id}/edit`}>
      <div className={styles.cardEdit}>
        <svg viewBox="0 0 100 100" aria-hidden="true" role="presentation" focusable="false">
          <path d="M 40 20 L0 20 0 100 80 100 80 60 M85 0 l15 15 -50 50 -23 8 8 -23 50 -50" strokeLinecap="round"></path>
        </svg>
      </div>
    </Link>
  );

  return (
    <div className={`${styles.card} ${(compact) ? styles.compact : ''}`}>
      {(allowEdit && userIsOwner) ? editIcon : null}
      <div className={styles.songDetails}>
        <div className={styles.songInfo}>
          <h3>{song.title}</h3>
          {(song.artist) ? <div>{song.artist.name}</div> : null}
          {(song.album) ? <div>{song.album.title}</div> : null}
        </div>
        <div className={styles.lyricsDiv}>{song.lyrics}</div>
      </div>
      {(compact) ? <div>...</div> : null}
      <p className={styles.lightText}>Added by {song.owner}</p>
    </div>
  );
}