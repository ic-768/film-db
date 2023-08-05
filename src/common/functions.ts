import { Favorite } from "./types";
// gets favorites from local storage.
// used in two cases - when logging in, and on first render if there's an existing user.

// wouldn't have to use this twice if logging in happened in a conventional manner - favorites would come from the DB
const getFavorites = () => {
  const favoritesString = localStorage.getItem("favorites");
  const favorites: Favorite[] = favoritesString
    ? JSON.parse(favoritesString)
    : [];
  return favorites;
};

export { getFavorites };
