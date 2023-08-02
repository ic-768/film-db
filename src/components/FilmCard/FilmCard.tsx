import { Movie } from "../../common";

// just to keep consistency with capitalisation.
interface MovieCardProps {
  title: Movie["Title"];
  year: Movie["Year"];
  id: Movie["imdbID"];
  poster: Movie["Poster"];
}

const MovieCard = ({ title, year, id, poster }: MovieCardProps) => (
  <li>
    <a href={`https://www.imdb.com/title/${id}`}>
      <img alt={title} src={poster} />
      {title}
      {year}
    </a>
  </li>
);

export default MovieCard;
