import axios from 'axios';

const OMDB  = process.env.BASE_OMDB;
const PLOT = process.env.PLOT_OMDB;
const OMDBKEY = process.env.APIKEY_OMDB;
const WATCHMODE = process.env.BASE_WATCHMODE;
const WMKEY = process.env.APIKEY_WATCHMODE;
const TMDB = process.env.BASE_TMDB;
const TMDBKEY = process.env.APIKEY_TMDB;


export default {
    search(query) {
        return axios.get(`${OMDB}${query}${OMDBKEY}`)
    },
};

// axios.get(`${PLOT}${query}&plot=full${OMDBKEY}`)
// axios.get(`${WATCHMODE}${WMKEY}&search_field=name&search_value=${query}`)
// axios.get(`${WATCHMODE}${wmId}/details/${WMKEY}`)
// axios.get(`${TMDB}${omdbData}${TMDBKEY}&language=en-US`)