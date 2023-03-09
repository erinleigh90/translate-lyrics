import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type ArtistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AlbumMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SongMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerArtist = {
  readonly id: string;
  readonly name: string;
  readonly albums?: (Album | null)[] | null;
  readonly songs?: (Song | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArtist = {
  readonly id: string;
  readonly name: string;
  readonly albums: AsyncCollection<Album>;
  readonly songs: AsyncCollection<Song>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Artist = LazyLoading extends LazyLoadingDisabled ? EagerArtist : LazyArtist

export declare const Artist: (new (init: ModelInit<Artist, ArtistMetaData>) => Artist) & {
  copyOf(source: Artist, mutator: (draft: MutableModel<Artist, ArtistMetaData>) => MutableModel<Artist, ArtistMetaData> | void): Artist;
}

type EagerAlbum = {
  readonly id: string;
  readonly title: string;
  readonly artist?: Artist | null;
  readonly songs?: (Song | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAlbum = {
  readonly id: string;
  readonly title: string;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly songs: AsyncCollection<Song>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Album = LazyLoading extends LazyLoadingDisabled ? EagerAlbum : LazyAlbum

export declare const Album: (new (init: ModelInit<Album, AlbumMetaData>) => Album) & {
  copyOf(source: Album, mutator: (draft: MutableModel<Album, AlbumMetaData>) => MutableModel<Album, AlbumMetaData> | void): Album;
}

type EagerSong = {
  readonly id: string;
  readonly title: string;
  readonly lyrics: string;
  readonly album?: Album | null;
  readonly artist?: Artist | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySong = {
  readonly id: string;
  readonly title: string;
  readonly lyrics: string;
  readonly album: AsyncItem<Album | undefined>;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Song = LazyLoading extends LazyLoadingDisabled ? EagerSong : LazySong

export declare const Song: (new (init: ModelInit<Song, SongMetaData>) => Song) & {
  copyOf(source: Song, mutator: (draft: MutableModel<Song, SongMetaData>) => MutableModel<Song, SongMetaData> | void): Song;
}