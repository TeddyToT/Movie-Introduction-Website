import { useParams } from "react-router";
import HalfThumbnail from "../../components/HalfThumbnail/HalfThumbnail";
import FilmInfo from "../../components/FilmInfo/FilmInfo";
import VideoDetail from "../../components/Video/VideoDetail";
import ListSilde from "../../components/ListSlide/ListSilde";


import { useTvDetail, useSimilarTvs, useTvCredits, useTvVideos } from "../../hooks/useTVs";
const TvSeriesDetail = () => {
  const { id } = useParams();

  const {
    data: tvDetails,
    isLoading: tvDetailsLoading,
    error: tvDetailsError,
  } = useTvDetail(id);

  const {
    data: tvCredits,
    isLoading: tvCreditsLoading,
    error: tvCreditsError,
  } = useTvCredits(id);

  const {
    data: tvVideos,
    isLoading: tvVideosLoading,
    error: tvVideosError,
  } = useTvVideos(id);

  const {
    data: similarTvs,
    isLoading: similarTvsLoading,
    error: similarTvsError,
  } = useSimilarTvs(id, 1);

  if (
    tvDetailsLoading ||
    similarTvsLoading ||
    tvCreditsLoading ||
    tvVideosLoading
  ) {
    return <p className="text-white">Loading...</p>;
  }

  if (
    tvDetailsError ||
    similarTvsError ||
    tvCreditsError ||
    tvVideosError
  ) {
    return <p className="text-white">Error loading data</p>;
  }

  return (
    <div className="text-white flex flex-col mb-10">
      <div className="w-screen md:min-h-[100vh]">
        <HalfThumbnail img={tvDetails?.backdrop_path} />
        <FilmInfo filmCredits={tvCredits} filmDetails={tvDetails}/>
      </div>
      <div className="flex flex-col w-11/12 mx-auto gap-12 pb-20">
        {tvVideos?.results.slice(0, 5).map((movie) => (
          <VideoDetail videoKey={movie.key} name={movie.name} />
        ))}
      </div>
      <div className="w-11/12 mx-auto">
        <ListSilde data={similarTvs?.results} title="Similar"/>
      </div>
    </div>
  );
};
export default TvSeriesDetail;
