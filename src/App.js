import {Navigate, Route, Routes} from "react-router-dom";

import {GenresPage, HomePage, MovieCardPage, MoviesListPage, NotFoundPage} from "./pages";
import {MainLayout} from "./layouts";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}>
                        {/*<Route path={':genreName'} element={<GenresPage/>}/>*/}
                        {/*<Route path={':movieId'} element={<MovieCardPage/>}/>*/}
                    </Route>
                    <Route path={'movies'} element={<MoviesListPage/>}>
                        <Route path={':movieId'} element={<MovieCardPage/>}/>
                    </Route>
                    <Route path={'genres'} element={<GenresPage/>}>
                        {/*<Route path={':genreName'} element={<MoviesListPage/>}>*/}
                        {/*    <Route path={':movieId'} element={<MovieCardPage/>}/>*/}
                        {/*</Route>*/}
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export {App};
