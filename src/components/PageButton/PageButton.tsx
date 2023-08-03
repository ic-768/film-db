import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PageButtonProps {
  orientation?: "forward" | "backward";
}

const PageButton = ({ orientation = "forward" }: PageButtonProps) => {
  const orientationClasses =
    orientation === "backward" ? "rotate-180 right-6" : "left-6";

  return (
    <div
      className={`
    p-4 bg-purple-600 z-10 fixed text-6xl bottom-12 mx-auto h-20 w-20 flex justify-center rounded-full flex items-center transition-colors hover:bg-purple-700 mt-auto mb-auto top-0 ${orientationClasses}`}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default PageButton;
