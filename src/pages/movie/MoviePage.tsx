import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { baseURL, FullMovieDetails } from "../../common";
import FavoriteButton from "../../components/FavoriteButton";
import HomeButton from "../../components/HomeButton";
import { LoaderContext } from "../../context/loader";
import { useFavorite } from "../../hooks/useFavorite";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<FullMovieDetails | undefined>();
  const [onFavorite, onUnFavorite, isFavorite] = useFavorite(id);
  const [loader, setLoader] = useContext(LoaderContext);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;

      setLoader(true);

      try {
        // TODO show loader
        const response = await fetch(`${baseURL}&i=${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.Error) {
          // TODO show error
        } else {
          setMovie(data);
          console.log(data);
        }
        console.log(data);
      } catch (error) {
        if (error instanceof Error) {
          // TODO show error message
        }
      }
      setLoader(false);
    };

    fetchMovie();
  }, [id, setLoader]);

  const MovieDetail = ({ name, detail }: { name: string; detail: string }) => (
    <p className="text-gray-600 mb-4">
      <strong>{name}:</strong> {detail}
    </p>
  );

  return movie ? (
    <div className="container mx-auto p-4">
      <HomeButton />
      <div className="max-w-3xl mx-auto bg-white rounded-lg relative">
        <FavoriteButton
          isFavorite={isFavorite}
          handleFavorite={onFavorite}
          handleUnfavorite={onUnFavorite}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img className="w-full" src={movie.Poster} alt={movie.Title} />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-gray-800">
              {movie.Title}
            </div>
            <MovieDetail name="Year" detail={movie.Year} />
            <MovieDetail name="Director" detail={movie.Director} />
            <MovieDetail name="Genre" detail={movie.Genre} />
            <MovieDetail name="Runtime" detail={movie.Runtime} />
            <MovieDetail name="Rated" detail={movie.Rated} />
            <MovieDetail name="IMDb Rating" detail={movie.imdbRating} />
            <MovieDetail name="IMDb Votes" detail={movie.imdbVotes} />
            <MovieDetail name="Plot" detail={movie.Plot} />
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">
            Additional Details
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <MovieDetail name="Actors" detail={movie.Actors} />
            <MovieDetail name="Language" detail={movie.Language} />
            <MovieDetail name="Country" detail={movie.Country} />
            <MovieDetail name="Released" detail={movie.Released} />
            <MovieDetail name="Awards" detail={movie.Awards} />
            <MovieDetail name="Metascore" detail={movie.Metascore} />
            <MovieDetail name="Production" detail={movie.Production} />
            <MovieDetail name="Box Office" detail={movie.BoxOffice} />
            <MovieDetail name="DVD" detail={movie.DVD} />
            <MovieDetail name="Website" detail={movie.Website} />
            <MovieDetail name="Type" detail={movie.Type} />
            <MovieDetail name="Response" detail={movie.Response} />
            <MovieDetail name="Writer" detail={movie.Writer} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default MoviePage;
