import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();

  return <div className="h-full w-full">{id}</div>;
};

export default MoviePage;
