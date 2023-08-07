import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

interface FavoriteButtonProps {
  isFavorite?: boolean;
  handleUnfavorite: () => void;
  handleFavorite: () => void;
}
/**
 * Button for user to add a movie to their favorites list
 */
const FavoriteButton = ({
  isFavorite,
  handleUnfavorite,
  handleFavorite,
}: FavoriteButtonProps) => {
  const [onClick, icon, color] = isFavorite
    ? [handleUnfavorite, solidHeart, "text-red-600"]
    : [handleFavorite, emptyHeart, "text-neutral-800"];

  return (
    <FontAwesomeIcon
      fontSize={24}
      cursor="pointer"
      onClick={onClick}
      icon={icon}
      className={`p-2 bg-white rounded-full absolute top-4 right-4 text-6lg text-red-800 hover:text-red-600 hover:opacity-100 ${color} transition-all sm:top-10 sm:right-10`}
    />
  );
};

export default FavoriteButton;
