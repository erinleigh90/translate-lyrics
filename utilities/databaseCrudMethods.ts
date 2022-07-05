import { API, DataStore } from "aws-amplify";
import {
  createArtist,
  createAlbum,
  createSong,
  updateSong,
} from "../src/graphql/mutations";
import { Album, Artist, Song } from "../src/models";
import { serializeModel } from "@aws-amplify/datastore/ssr";

export async function insertArtist(name: string) {
  try {
    const { data }: any = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createArtist,
      variables: {
        input: {
          name: name,
        },
      },
    });
    console.log("API - insertArtist: ", data);

    return data.createArtist;
  } catch (e: any) {
    console.error(...e.errors);
    throw new Error(e.errors[0].message);
  }
}

export async function insertAlbum(
  title: string,
  artistId: string | null = null
) {
  try {
    const { data }: any = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createAlbum,
      variables: {
        input: {
          title: title,
          artistId: artistId,
        },
      },
    });
    console.log("API - insertAlbum: ", data);

    return data.createAlbum;
  } catch (e: any) {
    console.error(...e.errors);
    throw new Error(e.errors[0].message);
  }
}

export async function dsinsertSong(
  title: string,
  lyrics: string,
  artist?: Artist,
  album?: Album
) {
  try {
    const response = await DataStore.save(
      new Song({
        title,
        lyrics,
        artist,
        album,
      })
    );
    const song = serializeModel(response);
    console.log("DS save song", song);

    return song;
  } catch (e: any) {
    console.error(...e.errors);
    throw new Error(e.errors[0].message);
  }
}

export async function insertSong(
  title: string,
  lyrics: string,
  artistId: string | null = null,
  albumId: string | null = null
) {
  try {
    const { data }: any = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createSong,
      variables: {
        input: {
          title: title,
          lyrics: lyrics,
          artistId: artistId,
          albumId: albumId,
        },
      },
    });
    console.log("API - insertSong: ", data);

    return data.createSong;
  } catch (e: any) {
    console.error(...e.errors);
    throw new Error(e.errors[0].message);
  }
}

export async function editSong(
  id: string,
  title: string,
  lyrics: string,
  artistId: string | null = null,
  albumId: string | null = null
) {
  try {
    const { data }: any = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: updateSong,
      variables: {
        input: {
          id: id,
          title: title,
          lyrics: lyrics,
          artistId: artistId,
          albumId: albumId,
        },
      },
    });
    console.log("API - editSong: ", data);

    return data.updateSong;
  } catch (e: any) {
    console.error(...e.errors);
    throw new Error(e.errors[0].message);
  }
}
