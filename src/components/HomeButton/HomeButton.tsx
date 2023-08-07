import { useNavigate } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeButton = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  return (
    <button
      className="z-10 fixed right-4 text-4xl bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg bottom-0 transform -translate-y-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto"
      onClick={goHome}
    >
      <FontAwesomeIcon icon={faHome} />
    </button>
  );
};

export default HomeButton;
