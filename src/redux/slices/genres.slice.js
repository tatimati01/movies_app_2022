import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    genres: [],
    currentGenre: null,
    loading: false,
    errors: null
}

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: [],
    extraReducers: []
});

const {reducer:genresReducer, actions:{getAllGenres, getCurrentGenre, getMoviesOfGenre}} = genresSlice;

const genresActions = {
    getAllGenres,
    getCurrentGenre,
    getMoviesOfGenre
}

export {
    genresReducer,
    genresActions
}