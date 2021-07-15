import axios from 'axios';

const OMDB  = process.env.BASE_OMDB;
const PLOT = process.env.PLOT_OMDB;
const OMDBKEY = process.env.APIKEY_OMDB;
const WATCHMODE = process.env.BASE_WATCHMODE;
const WMKEY = process.env.APIKEY_WATCHMODE;
const TMDB = process.env.BASE_TMDB;
const TMDBKEY = process.env.APIKEY_TMDB;

export const saveMovie = (movieData, token) => {
    return fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movieData),
    });
  };
  
  // remove saved book data for a logged in user
  export const deleteBook = (movieId, token) => {
    return fetch(`/api/profile/favorites/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

export default {
    search(query) {
        axios.get(`${OMDB}${query}${OMDBKEY}`)
    },
};

// axios.get(`${PLOT}${query}&plot=full${OMDBKEY}`)
// axios.get(`${WATCHMODE}${WMKEY}&search_field=name&search_value=${query}`)
// axios.get(`${WATCHMODE}${wmId}/details/${WMKEY}`)
// axios.get(`${TMDB}${omdbData}${TMDBKEY}&language=en-US`)