import { useQuery } from "@tanstack/react-query";
import { fetchPopularTvSeries, fetchTopRatedTvSeries, fetchTvSeriesDetail } from "../api/tvSeriesAPI"

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
