import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import LogInPage from "./pages/login";
import MainPage from "./pages/main";
import { UserContext } from "./context/user";
import { User } from "./common";
import MoviePage from "./pages/movie";
import { LoaderArgs, LoaderContext } from "./context/loader";

function App() {
  const [user, setUser] = useState<undefined | null | User>(undefined);
  const [loader, setLoader] = useState<LoaderArgs>(false);

  const getFavorites = () => {
    const favoritesString = localStorage.getItem("favorites");
    const favorites: string[] = favoritesString
      ? JSON.parse(favoritesString)
      : [];
    return favorites;
  };

  const onLogin = (user: User["username"]) => {
    setUser({ username: user, favorites: getFavorites() });
    localStorage.setItem("username", user);
  };

  useEffect(() => {
    const existingUser = localStorage.getItem("username");

    if (existingUser) {
      setUser({
        username: existingUser,
        favorites: getFavorites(),
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-800">
      <LoaderContext.Provider value={[loader, setLoader]}>
        <UserContext.Provider value={[user, setUser]}>
          <Routes>
            <Route
              path="/"
              element={user ? <MainPage /> : <LogInPage onLogin={onLogin} />}
            />
            <Route path="/:id" element={<MoviePage />} />
          </Routes>
        </UserContext.Provider>
      </LoaderContext.Provider>
    </div>
  );
}

export default App;
