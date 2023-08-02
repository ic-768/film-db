import { Movie } from "../../common";
import FavoriteButton from "../FavoriteButton";

// lowercase the movie API results for consistency
interface MovieCardProps {
  title: Movie["Title"];
  year: Movie["Year"];
  id: Movie["imdbID"];
  poster: Movie["Poster"];
  isFavorited?: boolean;
}

const MovieCard = ({
  title,
  year,
  id,
  poster,
  isFavorited = false,
}: MovieCardProps) => (
  <li className="relative flex flex-col items-center rounded-xl p-2 border border-slate-200 bg-slate-600">
    <FavoriteButton handleFavorite={() => {}} handleUnfavorite={() => {}} />
    <a href={`https://www.imdb.com/title/${id}`}>
      <img alt={title} src={poster} />
      {title}
      {year}
    </a>
  </li>
);

export default MovieCard;
