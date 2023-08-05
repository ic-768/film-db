import { useContext } from "react";
import { BasicMovieDetails, User } from "../common";
import { UserContext } from "../context/user";

// Hook to provide all functionality around favorite movies
export const useFavorite = (
  title: string,
  id?: BasicMovieDetails["imdbID"]
) => {
  const [user, setUser] = useContext(UserContext);

  const updateFavorites = (favorites: User["favorites"]) => {
    setUser({ ...user!, favorites });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const onFavorite = () => {
    if (!id) return;
    const updatedFavorites = user!.favorites.concat({ title, id });
    updateFavorites(updatedFavorites);
  };

  const onUnfavorite = () => {
    if (!id) return;
    const updatedFavorites = user!.favorites.filter((f) => f.id !== id);
    updateFavorites(updatedFavorites);
  };

  const isFavorite = !id ? false : user?.favorites.some((f) => f.id === id);

  return [onFavorite, onUnfavorite, isFavorite] as const;
};
