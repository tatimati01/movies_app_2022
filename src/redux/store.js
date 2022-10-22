import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genresReducer, moviesReducer} from "./slices";

const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}