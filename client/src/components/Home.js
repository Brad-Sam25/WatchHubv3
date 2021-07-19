import React, { useState, useEffect } from 'react';
import '../App.css';
import Axios from 'axios';
import MovieModal from './MovieDetails';
import '../components/style.css';

export default function MovieApp(props) {
    const [movies, setMovies] = useState([]);
    const [movieTitle, setMovieTitle] = useState("");
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const [movieApiSource, setMovieApiSource] = useState("POPULAR");
    useEffect(() => {

        const checkLoggedIn = async () => {
            if (localStorage.getItem('jwt')) {
                Axios({
                    method: 'get',
                    url: 'http://localhost:5000/api/users/isAuthenticated',
                    headers: {
                        'Authorization': localStorage.getItem('jwt'),
                    }
                }).catch(err => {
                    window.location = '/';
                    localStorage.removeItem('jwt');
                });
            }
        }
        checkLoggedIn();


        switch (movieApiSource) {
            case 'POPULAR':
                readPopularMovies(pageNumber);

                break;
            case 'SEARCH':
                searchMovie(pageNumber);
                break;
        }
    }, [pageNumber]);

    const readPopularMovies = async (pageNumber) => {
        setMovieApiSource("POPULAR");
        setPageNumber(pageNumber);
        await Axios({
            method: 'post',
            url: 'http://localhost:5000/api/protected/get_popular_movies',
            headers: {
                'Authorization': localStorage.getItem('jwt'),
            },
            data: {
                pageNumber
            }
        }).then(res => {
            setMovies(res.data);
        });
    }

    const onSubmit = async (e) => {
        console.log("onSubmit")
        setMovieApiSource("SEARCH");
        console.log("event", e)
        setPageNumber(1);

        try {
            console.log("try")
            e.preventDefault();
            setMovieTitle("")

            searchMovie(1);

        } catch (err) {
            console.log("err", err)

        }
    }
    const searchMovie = async (pageNumber) => {
        console.log("searchMovie")
        await Axios({
            method: 'post',
            url: 'http://localhost:5000/api/protected/get_search',
            headers: {
                'Authorization': localStorage.getItem('jwt'),
            },
            data: {
                movieTitle,
                pageNumber
            }
        }).then(res => {
            console.log("res", res.data)
            setMovies(res.data);
        });

    }
    const imageClick = async (movie) => {
        setSelectedMovie(movie);
        setModalShow(true);
    }

    const Movies = (props) => ((
        <>
            <button type="button" className="poster-button" onClick={() => imageClick(props.movie)}><img className="moviePoster movie-card" key={props.movie.key} src={props.movie.poster_path ? "https://image.tmdb.org/t/p/original" + props.movie.poster_path : require("../Assets/no_poster.jpg")} width="200px" height="300px" alt="movie poster"></img></button>
        </>
    ));
    return (

        <div className="container-fluid movie-page"
            style={{
                background: "#092756",
                background: "-moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%)",
                background: "-webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%)",
                background: "-o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%)",
                background: "-ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%)",
                background: "-webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%)",
                filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 )",
                marginTop: "80px",
                zIndex: 100
            }}
        >

            <MovieModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                movie={selectedMovie}

            />

            <form className="form-add-task">
                <div style={{
                    height: "150px",
                    width: "100%",
                    backgroundColor: "transparant",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <input style={{
                        height: '30px',
                        width: '400px',
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        textAlign: 'left',
                        borderRadius: "5px",
                        marginBottom: "15px"
                    }} onChange={(e) => setMovieTitle(e.target.value)}></input>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#343a40',
                        borderRadius: '8px',
                        height: '40px',
                        width: '100px',
                        cursor: 'pointer'
                    }}>
                        <p style={{
                            fontSize: '16px',
                            color: 'white',
                            fontWeight: 600,
                            marginBlockStart: '0px',
                            marginBlockEnd: '0px'
                        }}
                            onClick={(e) => onSubmit(e)}
                        >Search</p>
                    </div>
                </div>
                <div style={{
                    height: "100px",
                    width: "100%",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h1 style={{
                        color: "white",
                        textShadow: "1px 1px 3px #3b3b3b",
                        fontWeight: 600
                    }}>Top Rated Recent Movies</h1>
                </div>

                <div className="container card-container"
                    style={{
                        backgroundColor: "transparent"
                    }}
                >

                    {movies.map(currentMovie => <Movies movie={currentMovie} key={currentMovie.id} />)}
                    {movies.length <= 0 && <h4>No movies are found</h4>}

                </div>
            </form>

        </div>

    );
}
