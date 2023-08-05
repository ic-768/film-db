import { useContext } from "react";

import { UserContext } from "../../context/user";

const FavoritesPage = () => {
  const [user] = useContext(UserContext);

  return (
    <div>
      {user?.favorites.map((f) => (
        <span>{f.title}</span>
      ))}
    </div>
  );
};

export default FavoritesPage;
