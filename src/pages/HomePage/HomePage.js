import React from 'react';
import {Outlet} from "react-router-dom";

import css from '../pages.module.css'
import {GenresBar, MoviesList} from "../../components";


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