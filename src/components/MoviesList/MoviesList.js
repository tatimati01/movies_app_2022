import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

const MoviesList = () => {
    const {movies, status, error, pageNumber} = useSelector(state => state['moviesReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(pageNumber))
    }, [dispatch, pageNumber])
    return (
        <div>
            MoviesList
        </div>
    );
};

export {MoviesList};