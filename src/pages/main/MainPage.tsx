import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { baseURL, Movie } from "../../common";
import MovieCard from "../../components/FilmCard/FilmCard";
import SearchPanel from "../../components/SearchPanel";
import SignOutButton from "../../components/SignOutButton";

const MainPage = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const updateFilter: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitleFilter(e.target.value);

  const fetchMovies = async (page = 1) => {
    try {
      // TODO show loader
      const response = await fetch(
        `${baseURL}&s="${titleFilter}"&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovies(data.Search);
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
      <form onSubmit={searchByTitle}>
        <SearchPanel filter={titleFilter} onChangeFilter={updateFilter} />
      </form>
      <ul className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {movies.map((m) => (
          <MovieCard
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
