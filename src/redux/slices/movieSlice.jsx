import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    movies: [],
    selectedMovie: {},
}

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

export const getAllMovies = createAsyncThunk("getAllMovies", async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&page=1`);
    return response.data;
})

export const getMovieById = createAsyncThunk("getMovieById", async (movie_id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`);
    return response.data;
})

export const getMovieByType = createAsyncThunk("getMovieByType", async (movieType) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${apiKey}&language=en-US&page=1`);
    return response.data;
})

export const getMovieBySortAndAscending = createAsyncThunk("getMovieBySortAndAscending", async ({ sort, ascending }) => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ead4cc6603bccad87b13ec04b6c308d9&language=en-US&sort_by=${sort}.${ascending}&page=1`);
    return response.data;
})

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.movies = action.payload.results;
        }),
            builder.addCase(getMovieById.fulfilled, (state, action) => {
                state.selectedMovie = action.payload;
            }),
            builder.addCase(getMovieByType.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            }),
            builder.addCase(getMovieBySortAndAscending.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })

    }

})

export const { } = movieSlice.actions

export default movieSlice.reducer



// | Tür                | Endpoint                  |
// | ------------------ | ------------------------- |
// | Popüler            | `/movie/popular`          |
// | En yüksek puanlı   | `/movie/top_rated`        |
// | Şu anda vizyonda   | `/movie/now_playing`      |
// | Yakında çıkacaklar | `/movie/upcoming`         |
// | Arama              | `/search/movie?query=...` |
