import styles from '../styles/Home.module.css';

export default function SongCard({ song }: any) {

  return (
    <div className={styles.card} key={song.id}>
      <h3>{song.title}</h3>
      <div className={styles.lyricsDiv}>{song.lyrics}</div>
      <div>...</div>
    </div>
  );
}