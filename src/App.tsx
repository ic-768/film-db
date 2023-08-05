import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import LogInPage from "./pages/login";
import MainPage from "./pages/main";
import { UserContext } from "./context/user";
import MoviePage from "./pages/movie";
import { LoaderArgs, LoaderContext } from "./context/loader";
import Loader from "./components/Loader";
import Notification, { NotificationProps } from "./components/Notification";
import { NotificationContext } from "./context/notification";
import { getFavorites, User } from "./common";

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
            <Routes>
              <Route path="/" element={user ? <MainPage /> : <LogInPage />} />
              <Route path="/:id" element={<MoviePage />} />
            </Routes>
          </UserContext.Provider>
        </NotificationContext.Provider>
      </LoaderContext.Provider>
    </div>
  );
}

export default App;
