/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
      id
      name
      albums {
        items {
          id
          title
          artistId
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
      songs {
        items {
          id
          title
          lyrics
          albumId
          artistId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
      id
      name
      albums {
        items {
          id
          title
          artistId
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
      songs {
        items {
          id
          title
          lyrics
          albumId
          artistId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
      id
      name
      albums {
        items {
          id
          title
          artistId
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
      songs {
        items {
          id
          title
          lyrics
          albumId
          artistId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      title
      artistId
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
          albumId
          artistId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      title
      artistId
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
          albumId
          artistId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      title
      artistId
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
          albumId
          artistId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      title
      lyrics
      albumId
      album {
        id
        title
        artistId
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
        owner
      }
      artistId
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
      owner
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      title
      lyrics
      albumId
      album {
        id
        title
        artistId
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
        owner
      }
      artistId
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
      owner
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      title
      lyrics
      albumId
      album {
        id
        title
        artistId
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
        owner
      }
      artistId
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
      owner
    }
  }
`;
