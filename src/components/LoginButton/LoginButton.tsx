import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  const onLogIn = () => navigate("/");

  return (
    <button
      onClick={onLogIn}
      type="submit"
      className="self-center w-2/5 px-6 py-4 bg-green-600 rounded-lg transition-all whitespace-nowrap hover:bg-green-700 sm:w-2/4 hover:scale-110"
    >
      Log In
    </button>
  );
};

export default LoginButton;
