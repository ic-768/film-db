import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BasicMovieDetails } from "../../common";
import { useFavorite } from "../../hooks/useFavorite";
import FavoriteButton from "../FavoriteButton";

// lowercase the movie API results for consistency
interface MovieCardProps {
  title: BasicMovieDetails["Title"];
  year: BasicMovieDetails["Year"];
  id: BasicMovieDetails["imdbID"];
  poster: BasicMovieDetails["Poster"];
}

const MovieCard = ({ title, year, id, poster }: MovieCardProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [onFavorite, onUnfavorite, isFavorited] = useFavorite(id);

  const navigate = useNavigate();

  // if poster doesn't exist, don't try to wait for the image to load
  const visibilityClasses = `${
    poster === "N/A" || hasLoaded ? "block" : "hidden"
  }`;

  const onLoad = () => setHasLoaded(true);
  const onClickMovie = () => navigate(id);

  return (
    <li
      className={`${visibilityClasses} relative flex flex-col items-center rounded-xl p-2 border border-slate-200 bg-slate-600 `}
    >
      <FavoriteButton
        isFavorite={isFavorited}
        handleFavorite={onFavorite}
        handleUnfavorite={onUnfavorite}
      />
      <button onClick={onClickMovie} className="flex flex-col items-center">
        <img alt={title} src={poster} onLoad={onLoad} />
        <span>{title}</span>
        <span>{year}</span>
      </button>
    </li>
  );
};

export default MovieCard;
