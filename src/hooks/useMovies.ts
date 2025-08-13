import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies, fetchMovieDetail, fetchTopRatedMovies } from "../api/movieAPI"

export const usePopularMovies = (page = 1) => {
  return useQuery({
    queryKey: ["popularMovies", page],
    queryFn: () => fetchPopularMovies(page),
    staleTime: 1000 * 60 * 5,
  });
};

export const useTopRatedMovies = (page = 1) => {
  return useQuery({
    queryKey: ["topRatedMovies", page],
    queryFn: () => fetchTopRatedMovies(page),
    staleTime: 1000 * 60 * 5,
  });
};

export const useMovieDetail = (id: number) => {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => fetchMovieDetail(id),
    enabled: !!id,
  });
};
