import { withSSRContext } from "aws-amplify";
import { serializeModel } from "@aws-amplify/datastore/ssr";
import { Song } from "../src/models/index";
import SongCard from "../components/songCardLink";
import styles from "../styles/Home.module.css";

export async function getServerSideProps({ req }: any) {
  const SSR = withSSRContext({ req });
  const songs = await SSR.DataStore.query(Song);
  console.log("datastore query of songs", songs);

  return {
    props: {
      songs: serializeModel(songs),
    },
  };
}

export default function Home({ songs }: { songs: [Song] }) {
  if (songs && songs.length > 0) {
    const songCards = songs.map((song: Song) => (
      <SongCard song={song} key={song.id} />
    ));

    return <div className={styles.main}>{songCards}</div>;
  }
  return <div className={styles.main}>No Songs!</div>;
}
