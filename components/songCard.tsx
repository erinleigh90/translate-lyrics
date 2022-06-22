import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function SongCard({ song }: any) {

  return (
    <Link href={`/songs/${song.id}`}>
      <div className={`${styles.card} ${styles.songCard}`} key={song.id}>
        <h3>{song.title}</h3>
        <div className={styles.lyricsDiv}>{song.lyrics}</div>
        <div>...</div>
      </div>
    </Link>
  );
}