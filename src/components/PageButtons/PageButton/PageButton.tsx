import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

interface PageButtonProps {
  orientation?: "forward" | "backward";
  onClick: MouseEventHandler;
}

const PageButton = ({ orientation = "forward", onClick }: PageButtonProps) => {
  const orientationClasses =
    orientation === "forward" ? "rotate-180 right-6" : "left-6";

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-purple-600 z-10 fixed text-4xl bottom-12 mx-auto h-12 w-12 flex justify-center rounded-full flex items-center transition-colors hover:bg-purple-700 mt-auto mb-auto top-0 ${orientationClasses} sm:text-6xl sm:w-20 sm:h-20`}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default PageButton;
