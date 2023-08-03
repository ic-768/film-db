import { useState } from "react";

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
}: MovieCardProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  // if poster doesn't exist, don't try to wait for the image to load
  const visibilityClasses = `${
    poster === "N/A" || hasLoaded ? "block" : "hidden"
  }`;

  const onLoad = () => setHasLoaded(true);

  return (
    <li
      className={`${visibilityClasses} relative flex flex-col items-center rounded-xl p-2 border border-slate-200 bg-slate-600 `}
    >
      <FavoriteButton
        isFavorite={isFavorited}
        handleFavorite={() => {}}
        handleUnfavorite={() => {}}
      />
      <a href={`https://www.imdb.com/title/${id}`}>
        <img alt={title} src={poster} onLoad={onLoad} />
        {title}
        {year}
      </a>
    </li>
  );
};

export default MovieCard;
