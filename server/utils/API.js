import axios from 'axios';

const OMDB = process.env.OMDB_BASE_URL;
const OMDBKEY = process.env.API_KEY_OMDB;
const PLOT = process.env.PLOT_OMDB;
const WATCHMODE = process.env.BASE_WATCHMODE;
const WMKEY = process.env.APIKEY_WATCHMODE;
const TMDB = process.env.BASE_TMDB;
const TMDBKEY = process.env.APIKEY_TMDB;


export default {
    search(query) {
        axios.get(`${OMDB}${query}${OMDBKEY}`).then(async function (apiData) {
            console.log(apiData);
        
            let title = apiData.data.Search[0].Title;
            let posterimg = apiData.data.Search[0].Poster;
        
            let mainImdb = `https://www.imdb.com/title/${apiData.data.Search[0].imdbID}/`;
            let imdburl1 = `https://www.imdb.com/title/${apiData.data.Search[1].imdbID}/`;
            let imdburl2 = `https://www.imdb.com/title/${apiData.data.Search[2].imdbID}/`;
            let imdburl3 = `https://www.imdb.com/title/${apiData.data.Search[3].imdbID}/`;
            let omdbData = apiData.data.Search[0].imdbID;
        
            // console.log("urlPlot", urlPlot);
            let watch = await getOmdb(`${PLOT}${query}&plot=full${OMDBKEY}`);
        
            let urlMode = `${WATCHMODE}${WMKEY}&search_field=name&search_value=${query}`; 
            const watch2 = await getWatchMode(urlMode, query);
        
            let idUrl = `${TMDB}${omdbData}/videos?api_key=${TMDBKEY}&language=en-US`;
            console.log("idUrl", idUrl)
            const watch3 = await getMovieDB(idUrl);
            console.log("watch", watch);
            console.log("watch2", watch2);
            console.log("watch3", watch3)
        
            // res.json({
            //   title,
            //   posterimg,
            //   relatedSearch,
            //   relatedSearch2,
            //   relatedSearch3,
            //   mainImdb,
            //   imdburl1,
            //   imdburl2,
            //   imdburl3,
            //   watch,
            //   watch2,
            //   watch3
            // });
          });

          async function getOmdb(url) {
            console.log("getOmdb: ", url);
            const apiData = await axios.get(url);
        
            // console.log("apiData", apiData);
            let plot = apiData.data.Plot;
            let actors = apiData.data.Actors;
        
            console.log("plot", plot);
        
            return { plot, actors };
          }
        
          async function getWatchMode(url, search) {
            // console.log("getWatchMode");
        
            try {
              const userData = await axios.get(url);
        
              // console.log("userData", userData);
              let wmId = userData.data.title_results[0].id;
              // console.log("wmId", wmId);
        
              let apiKey2 = "?apiKey=" + process.env.API_KEY_WATCH;
              let idUrl = `https://api.watchmode.com/v1/title/${wmId}/details/${apiKey2}`;
              // console.log("idUrl:", idUrl);
              const userData2 = await axios.get(idUrl);
              // console.log('userData2', userData2)
              let runTime = userData2.data.runtime_minutes;
              let releaseDate = userData2.data.release_date;
              let criticScore = userData2.data.critic_score;
              let usRating = userData2.data.us_rating;
              return { runTime, releaseDate, criticScore, usRating, wmId };
            } catch (err) {
              console.log(err);
            };
          }
          async function getMovieDB(url) {
            // console.log("getMovieDB");
            try {
              const movieData = await axios.get(url);
              console.log("url", url)
              // console.log("movieData", movieData);
              let movieID = movieData.data.results[0].key
        
              console.log("movieID", movieID)
              return { movieID };
            } catch (err) {
              console.log(err);
            };
          }
        
    },
};