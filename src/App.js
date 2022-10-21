import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePage/>}>
                        <Route path={':genreName'} element={}/>
                        <Route path={':movieId'} element={<MovieCardPage/>}/>
                    </Route>
                    <Route path={'movies'} element={<MoviesListPage/>}>
                        <Route path={':movieId'} element={<MovieCardPage/>}/>
                    </Route>
                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':genreName'} element={}>
                            <Route path={':movieId'} element={<MovieInfoPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export {App};
