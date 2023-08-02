export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type User = {
  username: string;
  favorites: Movie["imdbID"][];
};
