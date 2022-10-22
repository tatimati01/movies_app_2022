import {axiosService} from "./axios.service";
import {api_key, urls} from "../configs";

export const genresService = {
    getAllGenres: ()=> axiosService.get(`${urls.genres}?api_key=${api_key}`),
    getGenreByName: (genreName)=> axiosService.get(`${urls.genres}?api_key=${api_key}&genre=${genreName}`)
}