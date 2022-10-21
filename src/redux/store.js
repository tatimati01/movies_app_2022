import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices";

const rootReducer = combineReducers({
movies: moviesReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}