/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
      albums {
        items {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          artistAlbumsId
          owner
        }
        nextToken
        startedAt
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        albums {
          nextToken
          startedAt
        }
        songs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncArtists = /* GraphQL */ `
  query SyncArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArtists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        albums {
          nextToken
          startedAt
        }
        songs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      title
      artist {
        id
        name
        albums {
          nextToken
          startedAt
        }
        songs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      artistAlbumsId
      owner
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        artist {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        songs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        artistAlbumsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAlbums = /* GraphQL */ `
  query SyncAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAlbums(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        artist {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        songs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        artistAlbumsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      title
      lyrics
      album {
        id
        title
        artist {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        songs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        artistAlbumsId
        owner
      }
      artist {
        id
        name
        albums {
          nextToken
          startedAt
        }
        songs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      artistSongsId
      albumSongsId
      owner
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        lyrics
        album {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          artistAlbumsId
          owner
        }
        artist {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        artistSongsId
        albumSongsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSongs = /* GraphQL */ `
  query SyncSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSongs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        lyrics
        album {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          artistAlbumsId
          owner
        }
        artist {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        artistSongsId
        albumSongsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
