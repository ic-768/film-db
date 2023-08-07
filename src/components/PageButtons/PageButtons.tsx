import PageButton from "./PageButton/PageButton";

interface PageButtonsProps {
  numDisplayedMovies: number;
  totalMovies: number;
  currentPage: number;
  decPage: () => void;
  incPage: () => void;
}
const PageButtons = ({
  numDisplayedMovies,
  totalMovies,
  currentPage,
  incPage,
  decPage,
}: PageButtonsProps) =>
  numDisplayedMovies ? (
    <>
      {currentPage !== 1 ? (
        <PageButton onClick={decPage} orientation="backward" />
      ) : null}
      {currentPage * 10 <= totalMovies ? (
        <PageButton onClick={incPage} />
      ) : null}
    </>
  ) : null;

export default PageButtons;
