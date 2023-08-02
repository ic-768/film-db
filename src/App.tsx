import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LogInPage from "./pages/login";
import MainPage from "./pages/main";

function App() {
  const [user, setUser] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const onLogin = (user: string) => setUser(user);

  // TODO check if user is logged in
  // TODO get user's favorited films
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
    <div className="min-h-screen bg-slate-800">
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
