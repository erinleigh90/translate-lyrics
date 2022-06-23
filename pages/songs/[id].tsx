
import { withSSRContext } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getSong, listSongs } from '../../src/graphql/queries';

import SongCard from '../../components/songCard';
import EditSong from '../../components/editSong';
import styles from '../../styles/Home.module.css';

export async function getStaticPaths() {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({ query: listSongs });
  const paths = data.listSongs.items.map((song: any) => ({
    params: { id: song.id }
  }));

  return {
    fallback: true,
    paths
  };
}

export async function getStaticProps({ params }: any) {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({
    query: getSong,
    variables: {
      id: params.id
    }
  });

  return {
    props: {
      song: data.getSong
    },
    revalidate: 60
  };
}

export default function SongDetails({ song }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading&hellip;</h1>
      </div>
    );
  }

  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };
  const handleEditSuccess = () => {
    setEditMode(false);
  };


  if (editMode) {
    return (
      <div>
        <EditSong song={song} handleSuccess={handleEditSuccess} />
      </div>
    );
  }

  return (
    <SongCard song={song} toggleEdit={toggleEdit}></SongCard>
  );
}
