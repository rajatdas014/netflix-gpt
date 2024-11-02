import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        addTrailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        nowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload;
        },
        popularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        topRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        upcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        resetMovieSlice: () => ({
            nowPlayingMovies: null,
            addTrailerVideo: null,
            popularMovies: null,
            topRatedMovies: null,
            upcomingMovies: null,
        })

    }
})

export const { nowPlayingMovies, addTrailerVideo, popularMovies, topRatedMovies, upcomingMovies, resetMovieSlice } = movieSlice.actions;
export default movieSlice.reducer;