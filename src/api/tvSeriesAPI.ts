import axios from "axios";
import type {TvSeriesListResponse, TvSeriesDetail } from "../types/tvSeries";
import type { Credits } from "../types/credit";
import type { Videos } from "../types/video";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

//for ACCESS TOKEN usage

// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   headers: {
//     Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
//     accept: "application/json",
//   },
// });

export const fetchPopularTvSeries = async (page = 1): Promise<TvSeriesListResponse> => {
  const res = await api.get("/tv/popular", { params: { page } });
  return res.data;
};

export const fetchTopRatedTvSeries = async (page = 1): Promise<TvSeriesListResponse> => {
  const res = await api.get("/tv/top_rated", { params: { page } });
  return res.data;
};

export const fetchTvSeriesDetail = async (id: string): Promise<TvSeriesDetail> => {
  const res = await api.get(`/tv/${id}`);
  return res.data;
};

export const fetchSimilarTvs = async (id: string, page = 1): Promise<TvSeriesListResponse> => {
  const res = await api.get(`/tv/${id}/similar`, { params: { page } });
  return res.data;
};

export const fetchTvCredits = async (id: string): Promise<Credits> => {
  const res = await api.get(`/tv/${id}/credits`);
  return res.data;
};

export const fetchTvVideos= async (id: string): Promise<Videos> => {
  const res = await api.get(`/tv/${id}/videos`);
  return res.data;
};

export const fetchSearchTvs = async ({
  pageParam = 1,
  query,
}: {
  pageParam?: number;
  query: string;
}): Promise<TvSeriesListResponse> => {
  const res = await api.get("/search/tv", {
    params: { query, page: pageParam },
  });
  return res.data;
};

