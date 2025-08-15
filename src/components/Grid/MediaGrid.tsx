import PreviewModel from "../../components/Modal/PreviewModel";
import WhiteButton from "../../components/Button/WhiteButton";
import type { Movie,MovieListResponse } from "../../types/movie";
import type { TvSeries,TvSeriesListResponse } from "../../types/tvSeries";

interface MediaGridProps {
  pages: (MovieListResponse | TvSeriesListResponse)[] | undefined;
  mediaType: "movie" | "tv";
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}

export default function MediaGrid({
  pages,
  mediaType,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: MediaGridProps) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pages?.map((page) =>
          page.results.map((item: Movie|TvSeries) => (
            <PreviewModel
              key={item.id}
              id={item.id}
              type={mediaType}
              img={item.poster_path}
              title={mediaType === "movie" ? item.title : item.name}
            />
          ))
        )}
      </div>

      {hasNextPage && (
        <div className="w-full text-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="md:w-52 w-40 py-11"
          >
            <WhiteButton
              text={isFetchingNextPage ? "Loading..." : "Watch More"}
              className="py-1"
            />
          </button>
        </div>
      )}
    </>
  );
}
