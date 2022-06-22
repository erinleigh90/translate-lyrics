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
          artistAlbumsId
          owner
        }
        nextToken
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
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
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
          owner
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        artistAlbumsId
        owner
      }
      nextToken
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
          owner
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        artistAlbumsId
        owner
      }
      artist {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
          artistAlbumsId
          owner
        }
        artist {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        artistSongsId
        albumSongsId
        owner
      }
      nextToken
    }
  }
`;
