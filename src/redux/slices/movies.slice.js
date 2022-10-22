import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    currentMovie: {},
    search: '',
    images: [],
    pageNumber: 1,
    loading: false,
    errors: null
}

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({pageNumber}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAllMovies();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({id},{rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovieById(id);
            return data;

        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const searchMovieByKeyword = createAsyncThunk(
    'moviesSlice/searchMovieByKeyword',
    async ({keyword}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.searchMovieByKeyword(keyword);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        goNextPage: (state) => {
            state.pageNumber = state.pageNumber + 1
        },
        goPrevPage: (state) => {
            state.pageNumber = state.pageNumber - 1
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled,(state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.errors = action.payload
                state.loading = false
            })
            .addCase(getAllMovies.pending, (state, action) => {
                state.loading = action.payload
            })
});

const {reducer: moviesReducer, actions: {goNextPage, goPrevPage}} = moviesSlice;

const moviesActions = {
    getAllMovies,
    getMovieById,
    searchMovieByKeyword,
    goNextPage,
    goPrevPage
}

export {
    moviesReducer,
    moviesActions
}