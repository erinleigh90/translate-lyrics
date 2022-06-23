import { useContext, useState } from "react";
import { UserContext } from "../utilities/userContextMethods";

import styles from '../styles/Home.module.css';

export default function SongCard({ song, toggleEdit, compact = false }: any) {
  const user: any = useContext(UserContext);
  const userIsOwner = (user != null) ? user.username == song.owner : false;

  const editIcon = (
    <div className={styles.cardEdit} onClick={toggleEdit}>
      <svg viewBox="0 0 100 100" aria-hidden="true" role="presentation" focusable="false">
        <path d="M 40 20 L0 20 0 100 80 100 80 60 M85 0 l15 15 -50 50 -23 8 8 -23 50 -50" strokeLinecap="round"></path>
      </svg>
    </div>
  );

  return (
    <div className={styles.card} key={song.id}>
      {(!compact && userIsOwner) ? editIcon : null}
      <h3>{song.title}</h3>
      <div className={`${styles.lyricsDiv} ${(compact) ? styles.compact : null}`}>{song.lyrics}</div>
      {(compact) ? <div>...</div> : null}
      <p className={styles.lightText}>Added by {song.owner}</p>
    </div>
  );
}