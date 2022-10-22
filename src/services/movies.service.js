import {axiosService} from "./axios.service";
import {api_key, urls} from "../configs";

export const moviesService = {
    getAllMovies: (pageNumber) => axiosService.get(`${urls.movies}?api_key=${api_key}&page=${pageNumber}`),
    getMovieById: (movieId) => axiosService.get(`${urls.movie}/${movieId}?api_key=${api_key}`),
    searchMovieByKeyword: (keyword) => axiosService.get(`${urls.search}/keyword?query=${keyword}?api_key=${api_key}`)
}