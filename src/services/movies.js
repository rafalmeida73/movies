import api from './api';
import axios from 'axios'
import { API_KEY, API_KEY_TMDB } from "@env"

const header = async () => ({
  'Content-type': 'application/json',
  'trakt-api-version': '2',
  'trakt-api-key': API_KEY
});


const popularMovies = async () => api.get(`/movies/popular`, { headers: await header() });
const commentsMovie = async (name) => api.get(`/movies/${name}/comments/newest`, { headers: await header() });
const peopleMovie = async (name) => api.get(`/movies/${name}/people`, { headers: await header() });

const recommendedMovieId = () => api.get(`/movies/recommended/today?limit=1`, { headers: header() });
const movieInfo = (id) => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY_TMDB}&language=pt-BR`);
const peopleInfo = (id) => axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY_TMDB}&language=pt-BR`);
const movieVideo = (id) => axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY_TMDB}&language=pt-BR`);

export default {
  popularMovies,
  recommendedMovieId,
  movieInfo,
  movieVideo,
  commentsMovie,
  peopleMovie,
  peopleInfo
};