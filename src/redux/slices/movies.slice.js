import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    errors: null
}

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
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
    async (id,{rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovieById();
            return data;

        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: {}
});

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    getAllMovies,
    getMovieById
}

export {
    moviesReducer,
    moviesActions
}