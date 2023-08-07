import { useNavigate } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FavoritesLink = () => {
  const navigate = useNavigate();
  const goToFavorites = () => navigate("/favorites");

  return (
    <button
      className="absolute flex items-center gap-2 top-4 left-4 px-4 py-2 bg-rose-700 rounded-lg shadow hover:bg-rose-800 transition-colors"
      onClick={goToFavorites}
    >
      Favorites
      <FontAwesomeIcon icon={faStar} />
    </button>
  );
};

export default FavoritesLink;
