import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {genresActions} from "../../redux";
import css from "../MoviesList/MoviesList.module.css";
import Genre from "../Genre/Genre";

const GenresBar = () => {
    const {genres, error, loading} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        dispatch(genresActions.getAllGenres());
    }, [dispatch])

    return (
        <div>
            <div className={css.movieWrapper}>
                {loading && <h3>Loading...</h3>}
                {error && <h2>Error</h2>}
                {genres && genres.map(genre =>
                    <Genre key={genre.id} genre={genre}/>
                )}
            </div>
        </div>
    );
};

export {GenresBar};