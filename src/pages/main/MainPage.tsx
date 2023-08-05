import {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
} from "react";

import { baseURL, BasicMovieDetails } from "../../common";
import Loader from "../../components/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import PageButton from "../../components/PageButton";
import SearchPanel from "../../components/SearchPanel";
import SignOutButton from "../../components/SignOutButton";
import { LoaderContext } from "../../context/loader";

const MainPage = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [movies, setMovies] = useState<BasicMovieDetails[]>([]);
  const [totalMovieResults, setTotalMovieResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useContext(LoaderContext);

  const updateFilter: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitleFilter(e.target.value);

  const fetchMovies = async (page = 1) => {
    if (!titleFilter) return;
    setLoader(true);

    try {
      const response = await fetch(
        `${baseURL}&s="${titleFilter}"&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.Error) {
        // TODO show error
      } else {
        setMovies(data.Search);
        setTotalMovieResults(data.totalResults);
      }
    } catch (error) {
      if (error instanceof Error) {
      }
    }
    setLoader(false);
  };

  const searchByTitle: FormEventHandler = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  const incPage = () => {
    fetchMovies(page + 1);
    setPage((p) => p + 1);
  };

  const decPage = () => {
    fetchMovies(page - 1);
    setPage((p) => p - 1);
  };

  const FilmButtons = () =>
    movies.length ? (
      <>
        {page !== 1 ? (
          <PageButton onClick={decPage} orientation="backward" />
        ) : null}
        {page * 10 <= totalMovieResults ? (
          <PageButton onClick={incPage} />
        ) : null}
      </>
    ) : null;

  return (
    <div>
      <SignOutButton />
      <FilmButtons />
      <form onSubmit={searchByTitle}>
        <SearchPanel filter={titleFilter} onChangeFilter={updateFilter} />
      </form>
      <ul className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 py-6 px-28">
        {movies.map((m) => (
          <MovieCard
            key={m.imdbID}
            title={m.Title}
            year={m.Year}
            id={m.imdbID}
            poster={m.Poster}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
