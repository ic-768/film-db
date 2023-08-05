import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/user";

const SignOutButton = () => {
  const [_user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const onSignOut = () => {
    setUser(undefined);
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <button
      onClick={onSignOut}
      className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
