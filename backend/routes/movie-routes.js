const router = require('express').Router();
let User = require('../models/user');
let Movie = require('../models/movie');
let Comment = require('../models/comment');
const axios = require('axios');


router.get('/getUserId', async (req, res) => {
  return res.json(req.user._id);
});


router.post('/get_search', async (req, res) => {
  const searchItem = req.body.movieTitle;
  const apiRes = await axios.get(`${process.env.MOVIE_BASE_URL}search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchItem}`)
    .then(res => { return res });

  return res.json(apiRes.data.results);
});

router.post('/get_popular_movies', async (req, res) => {

  const apiRes = await axios.get(`${process.env.MOVIE_BASE_URL}discover/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc`)
    .then(res => { return res });
  return res.json(apiRes.data.results);
});

router.get('/favorites', async (req, res) => {
  const favorites = await Movie.find({ userId: req.user._id });
  return res.json(favorites);
});

router.post('/add', async (req, res) => {
  let { title, movieId, description, posterPath } = req.body;

  const newMovie = new Movie({
    title,
    movieId,
    userId: req.user._id,
    description,
    posterPath
  });

  newMovie.save()
    .then(movie => res.json(movie))
    .catch(err => res.status(400).json({ Error: err }));
});

router.delete('/:id', async (req, res) => {
  const movieToDelete = await Movie.findOne({ userId: req.user._id, movieId: req.params.id });

  if (!movieToDelete) {
    return res.status(400).json({ Error: "Movie not found" });
  }
  const deletedMovie = await Movie.findByIdAndDelete(movieToDelete._id);
  const movies = await Movie.find({ userId: req.user._id });
  return res.json(movies);
});

router.post('/isFavoriteFound', async (req, res) => {

  let { movieId } = req.body;

  const isTaken = await Movie.findOne({ movieId: movieId, userId: req.user._id });
  if (isTaken) {
    return res.json(true);
  }
  return res.json(false);
});


router.get('/comments', async (req, res) => {
  const comments = await Comment.find({});
  return res.json(comments);
});

router.post('/addComment', async (req, res) => {
  let { movieId, comment } = req.body;

  if (comment.length <= 0) {
    return res.status(400).json({ Error: "Please leave a comment" });
  }
  let date = new Date().toJSON().slice(0, 10);

  const newComment = new Comment({
    username: req.user.username,
    userId: req.user._id,
    movieId,
    comment,
    date
  });
  newComment.save()
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json({ Error: err }));
});

router.delete('/delete_comment/:id', async (req, res) => {
  const commentToDelete = await Comment.findOne({ _id: req.params.id });

  if (!commentToDelete) {
    return res.status(400).json({ Error: "Comment not found" });
  }
  const deletedComment = await Comment.findByIdAndDelete(commentToDelete._id);
  const comments = await Comment.find({});
  return res.json(comments);
});

router.post('/test', async (req, res) => {
  res.json(req.user._id);
});

module.exports = router;