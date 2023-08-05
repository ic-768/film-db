import { ChangeEventHandler, FormEventHandler, useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard";
import PageButton from "../../components/PageButton";
import SearchPanel from "../../components/SearchPanel";

import { baseURL, BasicMovieDetails } from "../../common";
import { useAsyncAction } from "../../hooks";

const MainPage = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [movies, setMovies] = useState<BasicMovieDetails[]>([]);
  const [totalMovieResults, setTotalMovieResults] = useState(0);
  const [page, setPage] = useState(1);

  const getMovies = useAsyncAction();

  const updateFilter: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitleFilter(e.target.value);

  const onFetchMovies = (data: any) => {
    setMovies(data.Search);
    setTotalMovieResults(data.totalResults);
  };

  const fetchMovies = async (page = 1) => {
    if (!titleFilter) return;

    getMovies(
      `${baseURL}&s="${titleFilter}"&page=${page}`,
      "something went wrong",
      onFetchMovies
    );
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
