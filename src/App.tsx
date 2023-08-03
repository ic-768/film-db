import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LogInPage from "./pages/login";
import MainPage from "./pages/main";
import { UserContext } from "./context/user";
import { User } from "./common";

function App() {
  const [user, setUser] = useState<undefined | null | User>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

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
    //    const fetchData = async () => {
    //      try {
    //        const response = await fetch(`${baseURL}&s="${titleFilter}"&page=1`);
    //        if (!response.ok) {
    //          throw new Error("Network response was not ok");
    //        }
    //        const data = await response.json();
    //        console.log(data);
    //        setData(data);
    //        setLoading(false);
    //      } catch (error) {
    //        if (error instanceof Error) {
    //          setError(error);
    //        }
    //        setLoading(false);
    //      }
    //    };
    //
    //    fetchData();
  }, []);

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
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route
            path="/"
            element={user ? <MainPage /> : <LogInPage onLogin={onLogin} />}
          />
          <Route path="/test" element={<div>test</div>} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
