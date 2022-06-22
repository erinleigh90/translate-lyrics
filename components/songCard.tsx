import styles from '../styles/Home.module.css';

export default function SongCard({ song }: any) {
  return (
    <div className={styles.card}>
      <div>{song.title}</div>
      <div>{song.artist.name}</div>
      <div>{song.album.title}</div>
    </div>
  );
}