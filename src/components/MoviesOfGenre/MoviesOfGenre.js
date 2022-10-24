import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import css from './MoviesOfGenre.module.css';
import cssPage from '../MoviesList/MoviesList.module.css'
import {MovieCard} from "../MovieCard/MovieCard";
import {moviesService} from "../../services";
import {moviesActions} from "../../redux";
import {useDispatch, useSelector} from "react-redux";


const MoviesOfGenre = () => {
    const {pageNumber} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams();

    const {genre} = useParams();
    const genreId = genre.split('=')[1];

    const [movies, setMovies] = useState();

    useEffect(() => {
        moviesService.getMoviesByGenreId(genreId).then(value => setMovies(value.data.results))
    }, [genreId])

    return (
        <div>
            <div className={css.movieWrapper}>
                {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={cssPage.prevNextBox}>
                <button disabled={pageNumber <= 1} onClick={() => {
                    dispatch(moviesActions.goPrevPage(pageNumber));
                    setQuery(`page=${pageNumber-1}`)
                }}>
                    Previous page
                </button>

                <p className={cssPage.currentPage}>{pageNumber}</p>
                <p className={cssPage.pageNumbers}>{pageNumber + 1}</p>
                <p className={cssPage.pageNumbers}>{pageNumber + 2}</p>

                <button disabled={pageNumber >= 1000} onClick={() => {
                    dispatch(moviesActions.goNextPage(pageNumber));
                    setQuery(`page=${pageNumber+1}`)
                }}>
                    Next page
                </button>
            </div>
        </div>
    );
};

export {MoviesOfGenre};