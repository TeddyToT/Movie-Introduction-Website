import { useInfiniteTvs } from "../../hooks/useTVs";
import { useSearchParams } from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar";
import MediaGrid from "../../components/Grid/MediaGrid";
const TVSeriesPage = () => {
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
  } = useInfiniteTvs(keyword, type);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error when fetching</p>;

  return (
    <>
      <div className="w-full h-48 bg-gradient-to-b from-white to-transparent flex justify-center items-center">
        <h1 className="text-white text-4xl text-center font-bold">Tv Series</h1>
      </div>
      <div className="w-11/12 mx-auto">
      <SearchBar keyword={keyword} basePath="/tv"/>
      <MediaGrid fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} mediaType="tv" pages={data?.pages}/>
      </div>
    </>
  );
}

export default TVSeriesPage
