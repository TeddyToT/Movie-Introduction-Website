import { useQuery } from "@tanstack/react-query";
import {
  fetchPopularMovies,
  fetchMovieDetail,
  fetchTopRatedMovies,
  fetchSimilarMovies,
  fetchMovieCredits,
  fetchMovieVideos
} from "../api/movieAPI";

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

export const useMovieDetail = (id:string) => {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => fetchMovieDetail(id),
    enabled: !!id,
  });
};

export const useSimilarMovies = (id:string, page = 1) => {
  return useQuery({
    queryKey: ["similarMovies", id, page],
    queryFn: () => fetchSimilarMovies(id, page),
    enabled: !!id,
  });
};

export const useMovieCredits = (id:string) => {
  return useQuery({
    queryKey: ["movieCredits", id],
    queryFn: () => fetchMovieCredits(id),
    enabled: !!id,
  });
};

export const useMovieVideos = (id:string) => {
  return useQuery({
    queryKey: ["movieVideos", id],
    queryFn: () => fetchMovieVideos(id),
    enabled: !!id,
  });
};
