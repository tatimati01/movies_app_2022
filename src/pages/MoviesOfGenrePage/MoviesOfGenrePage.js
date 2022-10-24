import React from 'react';
import {Outlet} from "react-router-dom";

import {MoviesOfGenre} from "../../components";

const MoviesOfGenrePage = () => {
    return (
        <div>
            <Outlet/>
            <MoviesOfGenre/>
        </div>
    );
};

export {MoviesOfGenrePage};