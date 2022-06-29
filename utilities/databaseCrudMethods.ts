import { API } from 'aws-amplify';
import { createArtist, createAlbum, createSong } from '../src/graphql/mutations';

export async function insertArtist(name: string) {
  try {
    const { data }: any = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: createArtist,
      variables: {
        input: {
          name: name
        }
      }
    });

    return data.createArtist;
  } catch(e: any) {
    console.error(...e.errors);
    throw new Error(e.errors[0].message);
  }
}

export async function insertAlbum(title: string, artistId: string | null = null) {
  try {
    const { data }: any = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: createAlbum,
      variables: {
        input: {
          title: title,
          artistId: artistId
        }
      }
    });

    return data.createSong;
  } catch(e: any) {
    console.error(...e.errors);
    throw new Error(e.errors[0].message);
  }
}

export async function insertSong(title: string, lyrics: string, artistId: string | null = null, albumId: string | null = null) {
  try {
    const { data }: any = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: createSong,
      variables: {
        input: {
          title: title,
          lyrics: lyrics,
          artistId: artistId,
          albumId: albumId
        }
      }
    });

    return data.createSong;
  } catch(e: any) {
    console.error(...e.errors);
    throw new Error(e.errors[0].message);
  }
}