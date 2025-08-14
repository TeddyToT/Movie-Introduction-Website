import { useParams } from "react-router";
import HalfThumbnail from "../../components/HalfThumbnail/HalfThumbnail";
import FilmInfo from "../../components/FilmInfo/FilmInfo";
import VideoDetail from "../../components/Video/VideoDetail";
import ListSilde from "../../components/ListSlide/ListSilde";
import {
  useMovieDetail,
  useSimilarMovies,
  useMovieCredits,
  useMovieVideos,
} from "../../hooks/useMovies";
const MovieDetails = () => {
  const { id } = useParams();

  const {
    data: movieDetails,
    isLoading: movieDetailsLoading,
    error: movieDetailsError,
  } = useMovieDetail(id);

  const {
    data: movieCredits,
    isLoading: movieCreditsLoading,
    error: movieCreditsError,
  } = useMovieCredits(id);

  const {
    data: movieVideos,
    isLoading: movieVideosLoading,
    error: movieVideosError,
  } = useMovieVideos(id);

  const {
    data: similarMovies,
    isLoading: similarMoviesLoading,
    error: similarMoviesError,
  } = useSimilarMovies(id, 1);

  if (
    movieDetailsLoading ||
    similarMoviesLoading ||
    movieCreditsLoading ||
    movieVideosLoading
  ) {
    return <p className="text-white">Loading...</p>;
  }

  if (
    movieDetailsError ||
    similarMoviesError ||
    movieCreditsError ||
    movieVideosError
  ) {
    return <p className="text-white">Error loading data</p>;
  }

  return (
    <div className="text-white flex flex-col mb-10">
      <div className="w-screen md:min-h-[100vh]">
        <HalfThumbnail img={movieDetails?.backdrop_path} />
        <FilmInfo filmCredits={movieCredits} filmDetails={movieDetails}/>
      </div>
      <div className="flex flex-col w-11/12 mx-auto gap-12 pb-20">
        {movieVideos?.results.slice(0, 5).map((movie) => (
          <VideoDetail videoKey={movie.key} name={movie.name} />
        ))}
      </div>
      <div className="w-11/12 mx-auto">
        <ListSilde data={similarMovies?.results} title="Similar"/>
      </div>
    </div>
  );
};
export default MovieDetails;
