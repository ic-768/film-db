import React, { Dispatch, SetStateAction } from "react";
import { Movie } from "../common";

type Favorites = Movie["imdbID"][];

type FavoritesContextArgs = [Favorites, Dispatch<SetStateAction<Favorites>>];

export const FavoritesContext = React.createContext<FavoritesContextArgs>([
  [],
  () => [],
]);

export type { Favorites };
