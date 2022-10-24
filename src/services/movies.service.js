import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const moviesService = {
    getAllMovies: (pageNumber) => axiosService.get(`${urls.movies}?page=${pageNumber}`),
    getMovieById: (movieId) => axiosService.get(`${urls.movie}/${movieId}`),
    searchMovieByKeyword: (keyword) => axiosService.get(`${urls.search}/keyword?query=${keyword}`),
    getMoviesByGenreId: (genreId,pageNumber)=> axiosService.get(`${urls.movies}?page=${pageNumber}&with_genres=${genreId}`)
}