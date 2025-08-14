import { useQuery } from "@tanstack/react-query";
import {
  fetchPopularTvSeries,
  fetchTopRatedTvSeries,
  fetchTvSeriesDetail,
  fetchSimilarTvs,
  fetchTvCredits,
  fetchTvVideos
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

export const useTvDetail = (id: number) => {
  return useQuery({
    queryKey: ["TvDetail", id],
    queryFn: () => fetchTvSeriesDetail(id),
    enabled: !!id,
  });
};

export const useSimilarTvs = (id: string, page = 1) => {
  return useQuery({
    queryKey: ["similarTvs", id, page],
    queryFn: () => fetchSimilarTvs(id, page),
    enabled: !!id,
  });
};

export const useTvCredits = (id: string) => {
  return useQuery({
    queryKey: ["tvCredits", id],
    queryFn: () => fetchTvCredits(id),
    enabled: !!id,
  });
};

export const useTvVideos = (id:string) => {
  return useQuery({
    queryKey: ["tvVideos", id],
    queryFn: () => fetchTvVideos(id),
    enabled: !!id,
  });
};
