import CastSection from "../CastSection/CastSection";
import GenreBox from "../Box/GenreBox";
import type { Credits } from "../../types/credit";
import type { MovieDetail } from "../../types/movie";
import type { TvSeriesDetail } from "../../types/tvSeries";

interface FilmInfoProps {
  filmDetails: MovieDetail | TvSeriesDetail | undefined;
  filmCredits: Credits | undefined;
}
const FilmInfo = ({ filmDetails, filmCredits }: FilmInfoProps) => {
  return (
    <div className="w-11/12 mt-10 md:mt-32 mx-auto h-full flex z-1">
      <div className="h-5/6 w-full mt-auto z-2  flex flex-row gap-5">
        <div className="hidden md:block w-80 lg:w-[500px] px-4">
          <img
            className="rounded-3xl w-full"
            src={`http://image.tmdb.org/t/p/original/${filmDetails?.poster_path}`}
          />
        </div>
        <div className="w-full mx-auto h-5/6 flex flex-col justify-between gap-5">
          <h1 className="lg:text-7xl text-2xl font-bold">
            {filmDetails &&
              ("title" in filmDetails ? filmDetails.title : filmDetails.name)}
          </h1>
          <div className="w-full flex flex-row gap-2">
            {filmDetails?.genres.map((genre) => (
              <GenreBox genre={genre.name} />
            ))}
          </div>
          <p className="lg:text-justify lg:text-[17px] text-sm">
            {filmDetails?.overview}
          </p>

          <CastSection filmCredits={filmCredits} />
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
