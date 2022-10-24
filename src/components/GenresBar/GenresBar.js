import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";

import {genresActions} from "../../redux";
import css from "../GenresBar/GenresBar.module.css";

const GenresBar = () => {
    const {genres, error, loading} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();
    
    const navigator = useNavigate();

    useEffect(() => {
        dispatch(genresActions.getAllGenres());
    }, [dispatch])

    return (
        <div>
            <div className={css.genresBar}>
                {loading && <h3>Loading...</h3>}
                {error && <h2>Error</h2>}
                {genres && genres.map(genre =>
                    <div key={genre.id} className={css.genreStyle}>
                        <button onClick={()=> navigator(genre.id)}>
                            <NavLink to={`${genre.name}=${genre.id}`} genre={genre}>
                                {genre.name}
                            </NavLink>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export {GenresBar};