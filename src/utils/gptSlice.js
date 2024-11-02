import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        enabled: false,
        lang: "en",
        movienames: null,
        movieresults: null,
    },
    reducers:
    {
        gptToggleView: (state, action) => {
            state.enabled = !state.enabled;
        },
        selectLang: (state, action) => {
            state.lang = action.payload
        },
        gptMovies: (state, action) => {
            const { movienames, movieresults } = action.payload
            state.movienames = movienames;
            state.movieresults = movieresults;
        },
        tmdbMovies: (state, action) => {
            state.tmdbMovies = action.payload
        },
        resetGptSlice: () => ({
            enabled: false,
            lang: "en",
            movienames: null,
            movieresults: null,
        }),
    }
});


export const { gptToggleView, selectLang, gptMovies, tmdbMovies, resetGptSlice } = gptSlice.actions;
export default gptSlice.reducer;