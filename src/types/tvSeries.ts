export interface TvSeriesGenre {
  id: number;
  name: string;
}

export interface TvNetwork {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface TvProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface TvSpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// TV series item (popular, top rated, etc.)
export interface TvSeries {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids?: number[]; // only in list API
  id: number | string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

// Response list
export interface TvSeriesListResponse {
  page: number;
  results: TvSeries[];
  total_pages: number;
  total_results: number;
}

// TV series detail
export interface TvSeriesDetail extends TvSeries {
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  }[];
  episode_run_time: number[];
  genres: TvSeriesGenre[];
  homepage: string | null;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: string | null;
  } | null;
  networks: TvNetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  production_companies: TvNetwork[];
  production_countries: TvProductionCountry[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages: TvSpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
}
