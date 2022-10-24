import React from 'react';

import css from '../pages.module.css'
import {GenresBar, MoviesList, MoviesOfGenre} from "../../components";
import {Outlet} from "react-router-dom";


const HomePage = () => {

    return (
        <div className={css.homePageWrapper}>
            <GenresBar/>
            <Outlet/>
            {/*<MoviesOfGenre/>*/}
            <MoviesList/>
        </div>
    );
};

export {HomePage};