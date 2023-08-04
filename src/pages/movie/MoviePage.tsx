import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { baseURL, FullMovieDetails } from "../../common";
import FavoriteButton from "../../components/FavoriteButton";
import { useFavorite } from "../../hooks/useFavorite";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<FullMovieDetails | undefined>();

  const [onFavorite, onUnFavorite, isFavorite] = useFavorite(id);

  useEffect(() => {
    const fetchMovie = async () => {
      console.log("in console", id);
      if (!id) return;

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
    };

    fetchMovie();
  }, [id]);

  return movie ? (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg relative">
        <FavoriteButton
          isFavorite={isFavorite}
          handleFavorite={onFavorite}
          handleUnfavorite={onUnFavorite}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img className="w-full" src={movie.Poster} alt={movie.Title} />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2">{movie.Title}</div>
            <p className="text-gray-600 mb-4">
              <strong>Year:</strong> {movie.Year}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Director:</strong> {movie.Director}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Runtime:</strong> {movie.Runtime}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Rated:</strong> {movie.Rated}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>IMDb Rating:</strong> {movie.imdbRating}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>IMDb Votes:</strong> {movie.imdbVotes}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Plot:</strong> {movie.Plot}
            </p>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Additional Details</div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-gray-600">
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p className="text-gray-600">
              <strong>Language:</strong> {movie.Language}
            </p>
            <p className="text-gray-600">
              <strong>Country:</strong> {movie.Country}
            </p>
            <p className="text-gray-600">
              <strong>Released:</strong> {movie.Released}
            </p>
            <p className="text-gray-600">
              <strong>Awards:</strong> {movie.Awards}
            </p>
            <p className="text-gray-600">
              <strong>Metascore:</strong> {movie.Metascore}
            </p>
            <p className="text-gray-600">
              <strong>Production:</strong> {movie.Production}
            </p>
            <p className="text-gray-600">
              <strong>Box Office:</strong> {movie.BoxOffice}
            </p>
            <p className="text-gray-600">
              <strong>DVD:</strong> {movie.DVD}
            </p>
            <p className="text-gray-600">
              <strong>Website:</strong> {movie.Website}
            </p>
            <p className="text-gray-600">
              <strong>Type:</strong> {movie.Type}
            </p>
            <p className="text-gray-600">
              <strong>Response:</strong> {movie.Response}
            </p>
            <p className="text-gray-600">
              <strong>Writer:</strong> {movie.Writer}
            </p>
            {/* Add more details as needed */}
          </div>
        </div>
      </div>
    </div>
  ) : null;
  // TODO loader
};

export default MoviePage;
