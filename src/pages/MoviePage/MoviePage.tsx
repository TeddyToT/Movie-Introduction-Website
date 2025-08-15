import { useInfiniteMovies } from "../../hooks/useMovies";
import { useSearchParams } from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar";
import MediaGrid from "../../components/Grid/MediaGrid";
const MoviePage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || undefined;
  const type = searchParams.get("type") || undefined;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteMovies(keyword, type);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error when fetching</p>;

  return (
    <>
      <div className="w-full h-48 bg-gradient-to-b from-white to-transparent flex justify-center items-center">
        <h1 className="text-white text-4xl text-center font-bold">Movies</h1>
      </div>
      <div className="w-11/12 mx-auto">
      <SearchBar keyword={keyword} basePath="/movie"/>
      <MediaGrid fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} mediaType="movie" pages={data?.pages}/>
      </div>
    </>
  );
}

export default MoviePage
