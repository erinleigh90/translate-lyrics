/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArtistInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items:  Array<Album | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  title: string,
  artistId?: string | null,
  artist?: Artist | null,
  songs?: ModelSongConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  title: string,
  lyrics: string,
  albumId?: string | null,
  album?: Album | null,
  artistId?: string | null,
  artist?: Artist | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateArtistInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteArtistInput = {
  id: string,
  _version?: number | null,
};

export type CreateAlbumInput = {
  id?: string | null,
  title: string,
  artistId?: string | null,
  _version?: number | null,
};

export type ModelAlbumConditionInput = {
  title?: ModelStringInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
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
  artistId?: string | null,
  _version?: number | null,
};

export type DeleteAlbumInput = {
  id: string,
  _version?: number | null,
};

export type CreateSongInput = {
  id?: string | null,
  title: string,
  lyrics: string,
  albumId?: string | null,
  artistId?: string | null,
  _version?: number | null,
};

export type ModelSongConditionInput = {
  title?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  albumId?: ModelIDInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  title?: string | null,
  lyrics?: string | null,
  albumId?: string | null,
  artistId?: string | null,
  _version?: number | null,
};

export type DeleteSongInput = {
  id: string,
  _version?: number | null,
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
  startedAt?: number | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  albumId?: ModelIDInput | null,
  artistId?: ModelIDInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
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
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    albumId?: string | null,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    albumId?: string | null,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    albumId?: string | null,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncArtistsQuery = {
  syncArtists?:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAlbumsQuery = {
  syncAlbums?:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      title: string,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    albumId?: string | null,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      albumId?: string | null,
      album?:  {
        __typename: "Album",
        id: string,
        title: string,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSongsQuery = {
  syncSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      title: string,
      lyrics: string,
      albumId?: string | null,
      album?:  {
        __typename: "Album",
        id: string,
        title: string,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        lyrics: string,
        albumId?: string | null,
        artistId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    albumId?: string | null,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    albumId?: string | null,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    albumId?: string | null,
    album?:  {
      __typename: "Album",
      id: string,
      title: string,
      artistId?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    artistId?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
