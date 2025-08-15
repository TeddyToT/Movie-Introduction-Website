import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  fetchPopularTvSeries,
  fetchTopRatedTvSeries,
  fetchTvSeriesDetail,
  fetchSimilarTvs,
  fetchTvCredits,
  fetchTvVideos,
  fetchSearchTvs,
} from "../api/tvSeriesAPI";

export const usePopularTVs = (page = 1) => {
  return useQuery({
    queryKey: ["popularTVs", page],
    queryFn: () => fetchPopularTvSeries(page),
    staleTime: 1000 * 60 * 5,
  });
};

export const useTopRatedTVs = (page = 1) => {
  return useQuery({
    queryKey: ["topRatedTVs", page],
    queryFn: () => fetchTopRatedTvSeries(page),
    staleTime: 1000 * 60 * 5,
  });
};

export const useTvDetail = (id?: string) => {
  return useQuery({
    queryKey: ["TvDetail", id],
    queryFn: () => fetchTvSeriesDetail(id!),
    enabled: !!id,
  });
};

export const useSimilarTvs = (id?: string, page = 1) => {
  return useQuery({
    queryKey: ["similarTvs", id, page],
    queryFn: () => fetchSimilarTvs(id!, page),
    enabled: !!id,
  });
};

export const useTvCredits = (id?: string) => {
  return useQuery({
    queryKey: ["tvCredits", id],
    queryFn: () => fetchTvCredits(id!),
    enabled: !!id,
  });
};

export const useTvVideos = (id?: string) => {
  return useQuery({
    queryKey: ["tvVideos", id],
    queryFn: () => fetchTvVideos(id!),
    enabled: !!id,
  });
};

export const useInfiniteTvs = (keyword?: string, type?: string) => {
  return useInfiniteQuery({
    queryKey: ["tvs", keyword, type],
    queryFn: ({ pageParam = 1 }) =>
      keyword
        ? fetchSearchTvs({ pageParam, query: keyword })
        : type === "top_rated"
        ? fetchTopRatedTvSeries(pageParam)
        : fetchPopularTvSeries(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
