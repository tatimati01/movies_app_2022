import React from 'react';

import css from '../pages.module.css'
import {GenresBar, MoviesList} from "../../components";
import {Outlet} from "react-router-dom";


const HomePage = () => {

    return (
        <div className={css.homePageWrapper}>
            <GenresBar/>
            <Outlet/>
            <MoviesList/>
        </div>
    );
};

export {HomePage};