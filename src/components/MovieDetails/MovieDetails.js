import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import css from './MovieDetails.module.css'
import {imageURL} from "../../configs";
import {StarsMovie} from "../StarsMovie/StarsMovie";

const MovieDetails = () => {
    const {movieId} = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(moviesActions.getMovieById(movieId))
    }, [movieId, dispatch])

    const {currentMovie} = useSelector(state => state.moviesReducer);

    const {
        title,
        poster_path,
        budget,
        original_language,
        original_title,
        overview,
        release_date,
        tagline,
        vote_average,
        genres
    } = currentMovie;

    return (
        <div className={css.movieInfoPage}>

            <div className={css.imageBox}>
                <img src={`${imageURL}/w400${poster_path}`} alt={title}/>
            </div>

            <div className={css.movieInfoBox}>

                <div className={css.movieTitle}>
                    <h1>{title} ({original_title})</h1>
                </div>

                <div className={css.movieDescription}>
                    <p className={css.movieOverviewText}>{overview}</p>
                    <p><b>Release date:</b> {release_date}</p>
                    <p><b>Tagline:</b> {tagline}</p>
                    <p><b>Original language:</b> {original_language}</p>
                    <p><b>Budget:</b> ${budget}</p>
                    <div><b>Genres:</b> {genres && genres.map(genre =>
                        <div key={genre.id}>
                            <NavLink to={`/genres/${genre.name.toLowerCase()}`}>
                            {genre.name.toLowerCase()}
                        </NavLink>
                        </div>)}
                    </div>
                    <p><b>Vote average:</b> {vote_average}</p>
                    <StarsMovie/>
                </div>

            </div>

        </div>
    );
};

export {MovieDetails};