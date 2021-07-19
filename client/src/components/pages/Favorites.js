import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { removeMovieId } from '../utils/localStorage';
import { REMOVE_MOVIE } from '../utils/mutations';
import { GET_ME } from '../utils/queries'

const SavedMovies = () => {
  const { loading, data } = useQuery(GET_ME);
  // const [userData, setUserData] = useState({});
  const userData =data?.me || {};
  const[removeMovie, { error }] = useMutation(REMOVE_MOVIE) 

  
  const handleDeleteMovie = async (movieId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeMovie({
        variables: { movieId }
      })

      removeMovieId(movieId);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>My Favorite Movies List</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedMovies.length
            ? `Viewing ${userData.savedMovies.length} saved ${userData.savedMovies.length === 1 ? 'movie' : 'movies'}:`
            : "You haven't added any favorites yet!"}
        </h2>
        <CardColumns>
          {userData.savedMovies.map((movie) => {
            return (
              <Card key={movie.movieId} border='dark'>
                {movie.image ? <Card.Img src={movie.image} alt={`The cover for ${movie.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p className='small'>Authors: {movie.authors}</p>
                  <Card.Text>{movie.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteMovie(movie.movieId)}>
                    Remove from favorites
                  </Button>
                </Card.Body>
                {error && <div>An error has occurred...</div>}
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedMovies;