import {axiosService} from "./axios.service";
import {APIkey, urls} from "../configs";

export const moviesService = {
    getAllMovies: (pageNumber) => axiosService.get(`${urls.movies}?api_key=${APIkey}&page=${pageNumber}`),
    getMovieById: (movieId) => axiosService.get(`${urls.movie}/${movieId}?api_key=${APIkey}`),
}