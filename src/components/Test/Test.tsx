import { usePopularMovies } from "../../hooks/useMovies";

export default function PopularMovies() {
  const { data, isLoading, error } = usePopularMovies(1);

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error loading movies</p>;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
console.log("API_KEY:", API_KEY);
  return (
    <div>
      {data?.results.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
      {/* <h1 className="text-white">hehe {API_KEY}</h1> */}
    </div>
  );
}
