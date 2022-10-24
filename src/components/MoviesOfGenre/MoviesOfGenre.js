import React, {useEffect} from 'react';

import css from './MoviesOfGenre.module.css'
import {moviesActions} from "../../redux";


const MoviesOfGenre = () => {
    // const {genres} = useSelector(state => state.genresReducer);
    const {movies, loading, error, pageNumber} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();

    // const {genreName} = useParams();
    //
    const genreId = movies.map(movie => console.log(movie));

    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenreId(genreId))
    }, [genreId])



    return (
        <div>
            Movies of genre

            <div className={css.movieWrapper}>
                {loading && <h3>Loading...</h3>}
                {error && <h2>Error</h2>}

            </div>
        </div>
    );
};

export {MoviesOfGenre};