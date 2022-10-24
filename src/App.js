import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {GenresPage, HomePage, MovieDetailsPage, MoviesListPage, MoviesOfGenrePage, NotFoundPage} from "./pages";
import {MainLayout} from "./layouts";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}>
                        <Route path={':genre'} element={<MoviesOfGenrePage/>}/>
                        <Route path={':movieId'} element={<MovieDetailsPage/>}/>
                    </Route>
                    <Route path={'movies'} element={<MoviesListPage/>}>
                        <Route path={':movieId'} element={<MovieDetailsPage/>}>
                        </Route>
                    </Route>
                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':genre'} element={<MoviesOfGenrePage/>}>
                        </Route>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export {App};
