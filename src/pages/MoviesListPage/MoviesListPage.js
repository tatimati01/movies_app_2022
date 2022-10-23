import React from 'react';

import {MoviesList} from "../../components";
import {Outlet} from "react-router-dom";

const MoviesListPage = () => {
    return (
        <div>
            <Outlet/>
            <MoviesList/>
        </div>
    );
};

export {MoviesListPage};