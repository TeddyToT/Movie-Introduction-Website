import type { Movie } from "../../types/movie";
import ShadowButton from "../Button/ShadowButton";
import WhiteButton from "../Button/WhiteButton";
import { Link } from "react-router";
interface BannerProps {
  data: Movie;
  handleShowTrailerClick: ()=>void
}

const Banner = ({ data, handleShowTrailerClick }: BannerProps) => {

  return (
    <div className="w-screen h-[50vh] md:h-[70vh] lg:h-screen relative">
      <div className="absolute w-screen h-full flex items-center justify-center z-0">
        <img
          src={`http://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt="thumb-pic"
          className="h-[110%] w-full brightness-50 align-center"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="flex flex-row h-full w-11/12 md:w-5/6 lg:w-11/12 mx-auto items-center justify-between z-10">
        <div className="w-full lg:w-2/3 ww h-full flex items-center justify-center brightness-110 text-white  transition-all duration-300 ease-in ">
          <div className="w-full h-full flex flex-col justify-evenly">
            <div>
              <div className="flex flex-col">
                <p className="font-bold text-2xl md:text-6xl lg:text-8xl text-white p-5 pl-0 w-full ">
                  {data.title}
                </p>
              </div>
              <p className="w-full text-sm md:text-lg text-justify">
                {data.overview}
              </p>
            </div>
            <div className="flex w-2/3 sm:w-1/2 lg:w-3/4 xl:w-2/3 2xl:w-1/2 gap-3 md:h-14 md:text-xl">
            <Link to={`movie/${data.id}`} className="w-full">
            <ShadowButton text="Watch now" className="h-full"/>

            </Link>
              <div className="w-full" onClick={()=>handleShowTrailerClick()}>
              <WhiteButton text="Watch trailer" className="h-full"/>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:w-[40%] xl:w-1/3 2xl:w-[30%] lg:h-[90%] xl:h-full h-full lg:flex items-center justify-center z-30">
          <img
            src={`http://image.tmdb.org/t/p/original/${data.poster_path}`}
            className="w-5/6 h-1/2 lg:h-2/3 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
