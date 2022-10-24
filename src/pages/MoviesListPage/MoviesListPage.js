import React from 'react';
import {Outlet} from "react-router-dom";

import {MoviesList} from "../../components";

const MoviesListPage = () => {
    return (
        <div>
            <Outlet/>
            <MoviesList/>
        </div>
    );
};

export {MoviesListPage};