const baseURL = 'https://api.themoviedb.org/3';

// const api_key = '32020176f2103d274f021c8122cef22a';

const imageURL = 'http://image.tmdb.org/t/p';

// const language = {iso_639_1: 'en'}

const urls = {
    movies: `/discover/movie`,
    movie: `/movie`,
    genres: `/genre/movie/list`,
    search: `/search`,
};

export {
    baseURL,
    // api_key,
    imageURL,
    // language,
    urls
};