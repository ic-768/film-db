import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import LogInPage from "./pages/login";
import MainPage from "./pages/main";
import MoviePage from "./pages/movie";
import FavoritesPage from "./pages/favorites";
import { UserContext } from "./context/user";
import { LoaderArgs, LoaderContext } from "./context/loader";
import Loader from "./components/Loader";
import Notification, { NotificationProps } from "./components/Notification";
import { NotificationContext } from "./context/notification";
import { getFavorites, User } from "./common";
import SignOutButton from "./components/SignOutButton";

function App() {
  const [user, setUser] = useState<undefined | null | User>(undefined);
  const [loader, setLoader] = useState<LoaderArgs>(false);
  const [notification, setNotification] = useState<NotificationProps | null>();

  useEffect(() => {
    const existingUser = localStorage.getItem("username");

    if (existingUser) {
      setUser({
        username: existingUser,
        favorites: getFavorites(),
      });
    }
  }, []);

  // remove notifications after a fixed amount of time
  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification(null);
      }, 4500);
    }
  }, [notification]);

  return (
    <div className="min-h-screen bg-slate-800">
      <LoaderContext.Provider value={[loader, setLoader]}>
        <NotificationContext.Provider value={[notification, setNotification]}>
          <UserContext.Provider value={[user, setUser]}>
            {loader ? <Loader /> : null}
            {notification ? (
              <Notification
                type={notification.type}
                message={notification.message}
              />
            ) : null}
            {user ? <SignOutButton /> : null}
            {user ? (
              <Routes>
                <Route
                  path="/:urlTitle?/:urlPage?/:urlYear?/:urlType?"
                  element={<MainPage />}
                />
                <Route path="/single/:id" element={<MoviePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
            ) : (
              <LogInPage />
            )}
          </UserContext.Provider>
        </NotificationContext.Provider>
      </LoaderContext.Provider>
    </div>
  );
}

export default App;
