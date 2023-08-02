import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LogInPage from "./pages/login";
import MainPage from "./pages/main/MainPage";

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

function App() {
  const [user, setUser] = useState<null | string>(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [titleFilter, setTitleFilter] = useState("");
  const [page, setPage] = useState(0); // TODO does API start from 0 or 1?

  const searchByTitle = async (page: number) =>
    await fetch(`${baseURL}&s="${titleFilter}"&page=${page}`);

  const onLogin = (user: string) => setUser(user);

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

  return (
    <div className="h-full bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={user ? <MainPage /> : <LogInPage onLogin={onLogin} />}
        />
        <Route path="/test" element={<div>test</div>} />
      </Routes>
    </div>
  );
}

export default App;
