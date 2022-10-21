import {axiosService} from "./axios.service";
import {APIkey, urls} from "../configs";

export const genresService = {
    getAllGenres: ()=> axiosService.get(`${urls.genres}?api_key=${APIkey}`),
    getGenreByName: (genreName)=> axiosService.get(`${urls.genres}?api_key=${APIkey}&genre=${genreName}`)
}