/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArtistInput = {
  id?: string | null,
  name: string,
};

export type ModelArtistConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Artist = {
  __typename: "Artist",
  id: string,
  name: string,
  albums?: ModelAlbumConnection | null,
  songs?: ModelSongConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items:  Array<Album | null >,
  nextToken?: string | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  title: string,
  artist?: Artist | null,
  songs?: ModelSongConnection | null,
  createdAt: string,
  updatedAt: string,
  artistAlbumsId?: string | null,
  owner?: string | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  title: string,
  lyrics: string,
  album?: Album | null,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
  artistSongsId?: string | null,
  albumSongsId?: string | null,
  owner?: string | null,
};

export type UpdateArtistInput = {
  id: string,
  name?: string | null,
};

export type DeleteArtistInput = {
  id: string,
};

export type CreateAlbumInput = {
  id?: string | null,
  title: string,
  artistAlbumsId?: string | null,
};

export type ModelAlbumConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
  artistAlbumsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAlbumInput = {
  id: string,
  title?: string | null,
  artistAlbumsId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  title: string,
  lyrics: string,
  artistSongsId?: string | null,
  albumSongsId?: string | null,
};

export type ModelSongConditionInput = {
  title?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
  artistSongsId?: ModelIDInput | null,
  albumSongsId?: ModelIDInput | null,
};

export type UpdateSongInput = {
  id: string,
  title?: string | null,
  lyrics?: string | null,
  artistSongsId?: string | null,
  albumSongsId?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
};

export type ModelArtistConnection = {
  __typename: "ModelArtistConnection",
  items:  Array<Artist | null >,
  nextToken?: string | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
  artistAlbumsId?: ModelIDInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
  artistSongsId?: ModelIDInput | null,
  albumSongsId?: ModelIDInput | null,
};

export type CreateArtistMutationVariables = {
  input: CreateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type CreateArtistMutation = {
  createArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        artistAlbumsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateArtistMutationVariables = {
  input: UpdateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type UpdateArtistMutation = {
  updateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        artistAlbumsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteArtistMutationVariables = {
  input: DeleteArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type DeleteArtistMutation = {
  deleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        artistAlbumsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum?:  {
    __typename: "Album",
    id: string,
    title: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum?:  {
    __typename: "Album",
    id: string,
    title: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum?:  {
    __typename: "Album",
    id: string,
    title: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lyrics: string,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
      owner?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongsId?: string | null,
    albumSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lyrics: string,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
      owner?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongsId?: string | null,
    albumSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lyrics: string,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
      owner?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongsId?: string | null,
    albumSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetArtistQueryVariables = {
  id: string,
};

export type GetArtistQuery = {
  getArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        artistAlbumsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtistsQuery = {
  listArtists?:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum?:  {
    __typename: "Album",
    id: string,
    title: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums?:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      title: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lyrics: string,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
      owner?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongsId?: string | null,
    albumSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      title: string,
      lyrics: string,
      album?:  {
        __typename: "Album",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        artistAlbumsId?: string | null,
        owner?: string | null,
      } | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      artistSongsId?: string | null,
      albumSongsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateArtistSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateArtistSubscription = {
  onCreateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        artistAlbumsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateArtistSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateArtistSubscription = {
  onUpdateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        artistAlbumsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteArtistSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteArtistSubscription = {
  onDeleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        artistAlbumsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAlbumSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum?:  {
    __typename: "Album",
    id: string,
    title: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateAlbumSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum?:  {
    __typename: "Album",
    id: string,
    title: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteAlbumSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum?:  {
    __typename: "Album",
    id: string,
    title: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
        artistSongsId?: string | null,
        albumSongsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateSongSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lyrics: string,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
      owner?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongsId?: string | null,
    albumSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSongSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lyrics: string,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
      owner?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongsId?: string | null,
    albumSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSongSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    lyrics: string,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
      owner?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongsId?: string | null,
    albumSongsId?: string | null,
    owner?: string | null,
  } | null,
};
