const baseURL = 'https://api.themoviedb.org/3';

const imageURL = 'http://image.tmdb.org/t/p';

const urls = {
    movies: `/discover/movie`,
    movie: `/movie`,
    genres: `/genre/movie/list`,
    search: `/search/keyword`,
};

export {
    baseURL,
    imageURL,
    urls
};