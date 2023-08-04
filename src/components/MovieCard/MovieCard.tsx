import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BasicMovieDetails, User } from "../../common";
import { UserContext } from "../../context/user";
import FavoriteButton from "../FavoriteButton";

// lowercase the movie API results for consistency
interface MovieCardProps {
  title: BasicMovieDetails["Title"];
  year: BasicMovieDetails["Year"];
  id: BasicMovieDetails["imdbID"];
  poster: BasicMovieDetails["Poster"];
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
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  // if poster doesn't exist, don't try to wait for the image to load
  const visibilityClasses = `${
    poster === "N/A" || hasLoaded ? "block" : "hidden"
  }`;

  const onLoad = () => setHasLoaded(true);

  const updateFavorites = (favorites: User["favorites"]) => {
    setUser({ ...user!, favorites });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const onFavorite = (id: BasicMovieDetails["imdbID"]) => {
    const updatedFavorites = user!.favorites.concat(id);
    updateFavorites(updatedFavorites);
  };

  const onUnfavorite = (id: BasicMovieDetails["imdbID"]) => {
    const updatedFavorites = user!.favorites.filter((i) => i !== id);
    updateFavorites(updatedFavorites);
  };

  const onClickMovie = () => navigate(id);

  return (
    <li
      className={`${visibilityClasses} relative flex flex-col items-center rounded-xl p-2 border border-slate-200 bg-slate-600 `}
    >
      <FavoriteButton
        isFavorite={isFavorited}
        handleFavorite={() => onFavorite(id)}
        handleUnfavorite={() => onUnfavorite(id)}
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
