import { useContext, useState } from "react";

import { Movie, User } from "../../common";
import { UserContext } from "../../context/user";
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
  const [user, setUser] = useContext(UserContext);

  // if poster doesn't exist, don't try to wait for the image to load
  const visibilityClasses = `${
    poster === "N/A" || hasLoaded ? "block" : "hidden"
  }`;

  const onLoad = () => setHasLoaded(true);

  const updateFavorites = (favorites: User["favorites"]) => {
    setUser({ ...user!, favorites });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const onFavorite = (id: Movie["imdbID"]) => {
    const updatedFavorites = user!.favorites.concat(id);
    updateFavorites(updatedFavorites);
  };

  const onUnfavorite = (id: Movie["imdbID"]) => {
    const updatedFavorites = user!.favorites.filter((i) => i === id);
    updateFavorites(updatedFavorites);
  };

  return (
    <li
      className={`${visibilityClasses} relative flex flex-col items-center rounded-xl p-2 border border-slate-200 bg-slate-600 `}
    >
      <FavoriteButton
        isFavorite={isFavorited}
        handleFavorite={() => onFavorite(id)}
        handleUnfavorite={() => onUnfavorite(id)}
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
