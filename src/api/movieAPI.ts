import axios from "axios";
import type { MovieListResponse, MovieDetail } from "../types/movie";
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

export const fetchPopularMovies = async (
  page = 1
): Promise<MovieListResponse> => {
  const res = await api.get("/movie/popular", { params: { page } });
  return res.data;
};

export const fetchTopRatedMovies = async (
  page = 1
): Promise<MovieListResponse> => {
  const res = await api.get("/movie/top_rated", { params: { page } });
  return res.data;
};

export const fetchMovieDetail = async (id: string): Promise<MovieDetail> => {
  const res = await api.get(`/movie/${id}`);
  return res.data;
};

export const fetchSimilarMovies = async (
  id: string,
  page = 1
): Promise<MovieListResponse> => {
  const res = await api.get(`/movie/${id}/similar`, { params: { page } });
  return res.data;
};

export const fetchMovieCredits = async (id: string): Promise<Credits> => {
  const res = await api.get(`/movie/${id}/credits`);
  return res.data;
};

export const fetchMovieVideos = async (id: string | number): Promise<Videos> => {
  const res = await api.get(`/movie/${id}/videos`);
  return res.data;
};

export const fetchSearchMovies = async ({
  pageParam = 1,
  query,
}: {
  pageParam?: number;
  query: string;
}): Promise<MovieListResponse> => {
  const res = await api.get("/search/movie", {
    params: { query, page: pageParam },
  });
  return res.data;
};
