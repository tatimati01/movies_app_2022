import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {moviesActions} from "../../redux";
import css from "../MoviesList/MoviesList.module.css";
import {MovieCard} from "../MovieCard/MovieCard";
import {genresService} from "../../services";

const MoviesOfGenre = () => {
    const {genres} = useSelector(state => state.genresReducer);
    const {movies, loading, error, pageNumber} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams();
    const {genreName} = useParams();

    // const getGenreId = () => {
    //     const genreId = genres.map(genre=> {
    //             console.log(genre.id)
    //         return genreId
    //         })};
    // const genreId = movies.map(movie => (movie.genre_ids.map(value => value.id)));
    // console.log(genreId);

    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenreId(genreId))
    }, [genreId])

    // useEffect(() => {
    //     dispatch(moviesActions.getAllMovies(pageNumber)).then(value => value.payload.result);
    //     setQuery(`with_genres=${genreName.toLowerCase()}`)
    // }, [dispatch, pageNumber])


    return (
        <div>
            Movies of genre

            <div className={css.movieWrapper}>
                {loading && <h3>Loading...</h3>}
                {error && <h2>Error</h2>}
                {/*{movies.map(movie => (movie.genre_ids.map(genreId => console.log(genreId))))}*/}
            </div>
        </div>
    );
};

export {MoviesOfGenre};