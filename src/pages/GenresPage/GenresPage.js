import React from 'react';
import {Outlet} from "react-router-dom";

import {GenresBar} from "../../components";

const GenresPage = () => {
    return (
        <div>
            <GenresBar/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};