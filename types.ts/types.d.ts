export interface Songs {
  track: Track[];
  '@attr': SongsAttr;
}

export interface SongsAttr {
  country: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}

export interface Track {
  name: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: Artist;
  image: Image[];
  '@attr': TrackAttr;
}

export interface TrackFlatList {
  item: Track;
  index: number;
}

export interface TrackAttr {
  rank: string;
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
}

export interface Image {
  '#text': string;
  size: Size;
}

export enum Size {
  Extralarge = 'extralarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export interface Streamable {
  '#text': string;
  fulltrack: string;
}
