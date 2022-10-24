import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MovieCard} from "../MovieCard/MovieCard";
import css from './MoviesList.module.css'

const MoviesList = () => {
    const {movies, error, loading, pageNumber} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(pageNumber));
    }, [dispatch, pageNumber])

    return (
        <div>
            <div className={css.movieWrapper}>
                {loading && <h3>Loading...</h3>}
                {error && <h2>{error}</h2>}
                {movies && movies.map(movie =>
                    <MovieCard key={movie.id} movie={movie}/>
                )}
            </div>

            <div className={css.prevNextBox}>
                <button disabled={pageNumber <= 1} onClick={() => {
                    dispatch(moviesActions.goPrevPage(pageNumber));
                    setQuery(`page=${pageNumber-1}`)
                }}>
                    Previous page
                </button>

                <p className={css.currentPage}>{pageNumber}</p>
                <p className={css.pageNumbers}>{pageNumber + 1}</p>
                <p className={css.pageNumbers}>{pageNumber + 2}</p>

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

export {MoviesList};