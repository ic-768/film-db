import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import HomeLink from "../../components/HomeLink";
import { UserContext } from "../../context/user";

/**
 * Simply maps through user's favorites
 */
const FavoritesPage = () => {
  const [user] = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <HomeLink />
      <h1 className="text-3xl font-bold mb-4">Your Favorites</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {user?.favorites.map((f) => (
          <li
            key={f.id}
            className="border rounded-lg shadow-md bg-white hover:bg-gray-100"
          >
            <button
              className="h-full w-full p-4"
              onClick={() => navigate(`/single/${f.id}`)}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {f.title}
              </h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
