/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist($owner: String) {
    onCreateArtist(owner: $owner) {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist($owner: String) {
    onUpdateArtist(owner: $owner) {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist($owner: String) {
    onDeleteArtist(owner: $owner) {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String) {
    onCreateAlbum(owner: $owner) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($owner: String) {
    onUpdateAlbum(owner: $owner) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($owner: String) {
    onDeleteAlbum(owner: $owner) {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($owner: String) {
    onCreateSong(owner: $owner) {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($owner: String) {
    onUpdateSong(owner: $owner) {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($owner: String) {
    onDeleteSong(owner: $owner) {
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
