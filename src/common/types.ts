export type BasicMovieDetails = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type FullMovieDetails = BasicMovieDetails & {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Production: string;
  Rated: string;
  Released: string;
  Response: string;
  Runtime: string;
  Website: string;
  Writer: string;
  imdbRating: string;
  imdbVotes: string;
};

export type Favorite = {
  title: string;
  id: BasicMovieDetails["imdbID"];
};
export type User = {
  username: string;
  favorites: Favorite[];
};
