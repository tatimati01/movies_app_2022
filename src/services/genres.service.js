import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const genresService = {
    getAllGenres: ()=> axiosService.get(`${urls.genres}`),
    getGenreByName: (genreName)=> axiosService.get(`${urls.genres}?genre=${genreName}`),
}