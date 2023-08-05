import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const { urlTitle, urlYear, urlType, urlPage } = useParams();

  const updateFilter: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitleFilter(e.target.value);

  useEffect(() => {
    if (!urlTitle) return;

    let url = `${baseURL}&s="${urlTitle}"&page=${urlPage}`;
    if (urlYear) {
      url += `&y=${urlYear}`;
    }

    if (urlType) {
      url += `&type=${urlType}`;
    }

    getMovies(url, "something went wrong", onFetchMovies);
  }, []);

  const onFetchMovies = (data: any) => {
    setMovies(data.Search);
    setTotalMovieResults(data.totalResults);
  };

  const fetchMovies = async (page = 1) => {
    const title = titleFilter || urlTitle;
    if (!title) return;

    getMovies(
      `${baseURL}&s="${title}"&page=${page}`,
      "something went wrong",
      onFetchMovies
    );
    navigate(`/${title}`);
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
