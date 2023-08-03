import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { baseURL, Movie } from "../../common";
import MovieCard from "../../components/MovieCard/MovieCard";
import PageButton from "../../components/PageButton";
import SearchPanel from "../../components/SearchPanel";
import SignOutButton from "../../components/SignOutButton";

const MainPage = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const updateFilter: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitleFilter(e.target.value);

  const fetchMovies = async (page = 1) => {
    if (!titleFilter) return;

    try {
      // TODO show loader
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
      }
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        // TODO show error message
      }
    }
  };

  const searchByTitle: FormEventHandler = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div>
      <SignOutButton />
      <PageButton orientation="forward" />
      <PageButton orientation="backward" />
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
