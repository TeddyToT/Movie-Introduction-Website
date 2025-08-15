import BannerSilder from "../../components/BannerSlider/BannerSlider";
import ListSilde from "../../components/ListSlide/ListSilde";
import MainTrailerModel from "../../components/Modal/MainTrailerModel";
import { usePopularMovies, useTopRatedMovies } from "../../hooks/useMovies";
import { usePopularTVs, useTopRatedTVs } from "../../hooks/useTVs";
import { useState } from "react";
const Home = () => {
  const [showTrailer, setShowTrailer] = useState(false)
  const handleShowTrailerClick = () =>{
    setShowTrailer(true)
    console.log("Home: ", showTrailer);

  }

    const handleCLoseClick = () => {
    setShowTrailer(false)
    console.log("main: ", showTrailer);
  };
  const {
    data: popularMovies,
    isLoading: popularMoviesLoading,
    error: popularMoviesError,
  } = usePopularMovies(1);
  const {
    data: topRatedMovies,
    isLoading: topRatedMoviesLoading,
    error: topRatedMoviesError,
  } = useTopRatedMovies(1);

  const {
    data: popularTVs,
    isLoading: popularTVsLoading,
    error: popularTVsError,
  } = usePopularTVs(1);
  const {
    data: topRatedTVs,
    isLoading: topRatedTVsLoading,
    error: topRatedTVsError,
  } = useTopRatedTVs(1);

  if (
    popularMoviesLoading ||
    topRatedMoviesLoading ||
    popularTVsLoading ||
    topRatedTVsLoading
  ) {
    return <p className="text-white">Loading...</p>;
  }

  if (
    popularMoviesError ||
    topRatedMoviesError ||
    popularTVsError ||
    topRatedTVsError
  ) {
    return <p className="text-white">Error loading data</p>;
  }

  return (
    <div className="mb-20">
      <MainTrailerModel showState={showTrailer} handleCLoseClick={handleCLoseClick}/>
      <BannerSilder handleShowTrailerClick={handleShowTrailerClick}/>
      <div className=" w-11/12 mx-auto flex flex-col gap-14">
        {/* Movies */}
        <ListSilde data={popularMovies?.results} title="Trending Movies" />
        <ListSilde data={topRatedMovies?.results} title="Top Rated Movies" />

        {/* TVs */}
        <ListSilde data={popularTVs?.results} title="Trending TV Shows" />
        <ListSilde data={topRatedTVs?.results} title="Top Rated TV Shows" />
      </div>
    </div>
  );
};
export default Home;
