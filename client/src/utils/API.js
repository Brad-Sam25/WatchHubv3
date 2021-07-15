import axios from 'axios';

const OMDB = process.env.OMDB_BASE_URL;
const OMDBKEY = process.env.API_KEY_OMDB;

export default {
    search(query) {
        return axios.get(`${OMDB}${query}${OMDBKEY}`)
    },
};



// export default {
//     search(query) {
//         return axios.get()
// }