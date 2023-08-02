import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

interface FavoriteButtonProps {
  isFavorite?: boolean;
  isFavoriting?: boolean;
  handleUnfavorite: () => void;
  handleFavorite: () => void;
}
const FavoriteButton = ({
  isFavoriting,
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
      className={`p-2 bg-white rounded-full absolute top-10 right-10 text-6lg text-red-800 hover:text-red-600 hover:opacity-100 ${color} ${
        isFavoriting ? "animate-spin opacity-100" : "opacity-75 "
      } transition-all`}
    />
  );
};

export default FavoriteButton;
