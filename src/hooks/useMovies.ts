import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

import {
  fetchPopularMovies,
  fetchMovieDetail,
  fetchTopRatedMovies,
  fetchSimilarMovies,
  fetchMovieCredits,
  fetchMovieVideos,
  fetchSearchMovies,
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

export const useMovieDetail = (id?: string) => {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => fetchMovieDetail(id!),
    enabled: !!id,
  });
};

export const useSimilarMovies = (id?: string, page = 1) => {
  return useQuery({
    queryKey: ["similarMovies", id, page],
    queryFn: () => fetchSimilarMovies(id!, page),
    enabled: !!id,
  });
};

export const useMovieCredits = (id?: string) => {
  return useQuery({
    queryKey: ["movieCredits", id],
    queryFn: () => fetchMovieCredits(id!),
    enabled: !!id,
  });
};

export const useMovieVideos = (id?: string | number) => {
  return useQuery({
    queryKey: ["movieVideos", id],
    queryFn: () => fetchMovieVideos(id!),
    enabled: !!id,
  });
};

export const useInfiniteMovies = (keyword?: string, type?: string) => {
  return useInfiniteQuery({
    queryKey: ["movies", keyword, type],
    queryFn: ({ pageParam = 1 }) =>
      keyword
        ? fetchSearchMovies({ pageParam, query: keyword })
        : type === "top_rated"
        ? fetchTopRatedMovies(pageParam)
        : fetchPopularMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
