import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";

const initialState = {
    genres: [],
    currentGenre: null,
    loading: false,
    errors: null
}

const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAllGenres();
            console.log(data)
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: [],
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.results
                state.loading = false
            })
            .addCase(getAllGenres.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
            .addCase(getAllGenres.pending, (state, action) => {
                state.loading = action.payload
            })

});


const {reducer:genresReducer} = genresSlice;

const genresActions = {
    getAllGenres,
    // getCurrentGenre,
    // getMoviesOfGenre
}

export {
    genresReducer,
    genresActions
}