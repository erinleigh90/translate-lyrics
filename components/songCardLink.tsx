import Link from 'next/link';
import SongCard from '../components/songCard';
import styles from '../styles/Home.module.css';

export default function SongCardLink({ song }: any) {
  if (song) {
    return (
      <Link href={`/songs/${song.id}`}>
        <div className={styles.songLink}>
          <SongCard song={song} compact={true}></SongCard>
        </div>
      </Link>
    );
  }
  return (<div>What is happening?</div>);
}