import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import MovieCard from "../../components/MovieCard/MovieCard";
import SearchPanel from "../../components/SearchPanel";

import { baseURL, BasicMovieDetails } from "../../common";
import { useAsyncAction } from "../../hooks";
import PageButtons from "../../components/PageButtons/PageButtons";

const MainPage = () => {
  // TODO group into a single filter object
  const [titleFilter, setTitleFilter] = useState("");
  const [yearFilter, setYearFilter] = useState<string | undefined>();
  const [typeFilter, setTypeFilter] = useState<string | undefined>();

  const [movies, setMovies] = useState<BasicMovieDetails[]>([]);
  const [totalMovieResults, setTotalMovieResults] = useState(0);
  const [page, setPage] = useState(1);

  const getMovies = useAsyncAction();
  const navigate = useNavigate();

  const { urlTitle, urlYear, urlType, urlPage } = useParams();

  const updateTitle: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitleFilter(e.target.value);
  const updateYear = (y?: string) => setYearFilter(y);
  const updateType = (t?: string) => setTypeFilter(t);

  // Used to construct a url to fetch - could be from state or url params
  const constructUrl = (
    title?: string,
    page?: string | number,
    year?: string,
    type?: string
  ) => {
    let url = `${baseURL}&s="${title}"&page=${page}`;
    if (year) {
      url += `&y=${year}`;
    }

    if (type) {
      url += `&type=${type}`;
    }
    return url;
  };

  /*Keep filters in sync with url params*/
  useEffect(() => {
    setTitleFilter(urlTitle || "");
  }, [urlTitle]);

  useEffect(() => {
    setYearFilter(urlYear || "");
  }, [urlYear]);

  useEffect(() => {
    setTypeFilter(urlType || "");
  }, [urlType]);
  /******************************************/

  // on first render => check url params to load the referenced movie results
  useEffect(() => {
    if (!urlTitle) return;
    if (urlPage) setPage(Number(urlPage));

    const url = constructUrl(urlTitle, urlPage || page, urlYear, urlType);
    getMovies(url, "something went wrong", onFetchMovies);
  }, []);

  // set state after api fetch
  const onFetchMovies = (data: any) => {
    setMovies(data.Search);
    setTotalMovieResults(data.totalResults);
  };

  // Triggered when searching normally thorugh search panel
  const searchForFilm: FormEventHandler = (e) => {
    e.preventDefault();
    if (!titleFilter) return;

    // uses state to construct url
    const fetchUrl = constructUrl(titleFilter, 1, yearFilter, typeFilter);
    getMovies(fetchUrl, "something went wrong", onFetchMovies);

    let pageUrl = `/${titleFilter}/1`;
    pageUrl += `/${yearFilter || '""'}`;
    if (typeFilter) pageUrl += `/${typeFilter}`;

    navigate(pageUrl);
    setPage(1);
  };

  // update page and add url param
  const updatePage = (page: number) => {
    const url = constructUrl(urlTitle, page, yearFilter, typeFilter);
    getMovies(url, "something went wrong", onFetchMovies);
    setPage(page);
    navigate(`/${urlTitle}/${page}`);
  };

  const decPage = () => updatePage(page - 1);
  const incPage = () => updatePage(page + 1);

  return (
    <div>
      <PageButtons
        numDisplayedMovies={movies?.length}
        totalMovies={totalMovieResults}
        currentPage={page}
        incPage={incPage}
        decPage={decPage}
      />
      <form onSubmit={searchForFilm}>
        <SearchPanel
          title={titleFilter}
          year={yearFilter}
          type={typeFilter}
          onChangeTitle={updateTitle}
          onChangeYear={updateYear}
          onChangeType={updateType}
        />
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
