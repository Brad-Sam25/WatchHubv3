import React, { useState, useEffect } from 'react';
import '../components/style.css';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

import { Modal, Button, Card, Form } from 'react-bootstrap';
import Axios from 'axios';
export default function MovieModal(props) {
  const [isFavoriteMovieFound, setFavoriteMovie] = useState();
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [userId, setUserId] = useState();

  useEffect(() => {
    //creates AbortSignal object.
    const ac = new AbortController();

    const isFavoriteFound = async () => {
      await Axios({
        method: 'post',
        url: 'http://localhost:5000/api/protected/isFavoriteFound',
        headers: {
          'Authorization': localStorage.getItem('jwt'),
        },
        data: {
          movieId: props.movie.id
        }


      }).then(res => {
        setFavoriteMovie(res.data);
      });


    }
    isFavoriteFound();
    //aborts async tasks
    return () => ac.abort();
  });
  useEffect(() => {

    const ac = new AbortController();

    const getComments = async () => {
      await Axios({
        method: 'get',
        url: 'http://localhost:5000/api/protected/comments',
        headers: {
          'Authorization': localStorage.getItem('jwt'),
        }

      }).then(res => {
        var temporaryCommentsArray = [];
        temporaryCommentsArray = res.data;
        setComments(temporaryCommentsArray.reverse());
      });
    }
    getComments();

    const getUserId = async () => {
      await Axios({
        method: 'get',
        url: 'http://localhost:5000/api/protected/getUserId',
        headers: {
          'Authorization': localStorage.getItem('jwt'),
        }
      }).then(res => {
        setUserId(res.data);
      });
    }
    getUserId();

    return () => ac.abort();

  }, []);


  const handleFavorite = () => {


    if (isFavoriteMovieFound) {
      // console.log(isFavoriteFound()+" in if");
      return (
        <Button onClick={() => removeFavorite()}>Remove from Favorites</Button>

      );

    } else {

      return (
        <Button onClick={() => addFavorite()}>Add to Favorites</Button>


      );

    }
  }
  const addFavorite = async () => {

    await Axios({
      method: 'post',
      url: 'http://localhost:5000/api/protected/add',
      headers: {
        'Authorization': localStorage.getItem('jwt'),
      },
      data: {
        title: props.movie.title,
        movieId: props.movie.id,
        description: props.movie.overview,
        posterPath: props.movie.poster_path,
      }
    }).then(res => {
      handleFavorite();
      setFavoriteMovie(true);

    });
  }
  const removeFavorite = async () => {
    await Axios({
      method: 'delete',
      url: 'http://localhost:5000/api/protected/' + props.movie.id,
      headers: {
        'Authorization': localStorage.getItem('jwt'),
      },
    }).then(res => {
      setFavoriteMovie(false);
    });
  }

  const deleteComment = async (id) => {
    await Axios({
      method: 'delete',
      url: 'http://localhost:5000/api/protected/delete_comment/' + id,
      headers: {
        'Authorization': localStorage.getItem('jwt'),
      },
    }).then(res => {
      var temporaryCommentsArray = [];
      temporaryCommentsArray = res.data;

      setComments(temporaryCommentsArray.reverse());
    });
  }

  const Comments = (props) => {
    let isUsersComment = false;
    if (props.comment.movieId === props.movie.id) {
      if (props.comment.userId === userId) {
        isUsersComment = true;
      }
      return (
        <Card key={props.comment.key} className="comment-card">
          <Card.Body style={{
            position: "relative"
          }}>
            <div className="row">
              <div className="col-sm-12">
                <h6>{props.comment.username} {props.comment.date}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <p>{props.comment.comment}</p>
              </div>
            </div>
            {isUsersComment && <HighlightOffRoundedIcon style={{
              cursor: "pointer",
              fontSize: "2.5em",
              color: "red",
              position: "absolute",
              top: "5px",
              right: "5px",

            }} onClick={() => deleteComment(props.comment._id)} />}
          </Card.Body>
        </Card>);
    } else {
      return null;
    }
  }
  const commentCountUpdate = () => {
    let count = 0;
    for (var commentIndex = 0; commentIndex < comments.length; commentIndex++) {
      if (comments[commentIndex].movieId === props.movie.id) {

        count++;
      }
    }
    return (<label htmlFor="comment"><b>{count} Comment(s)</b></label>
    );
  }
  const onSubmit = async (e) => {

    try {
      e.preventDefault();
      e.target.reset();
      console.log(userComment);
      await Axios({
        method: 'post',
        url: 'http://localhost:5000/api/protected/addComment',
        headers: {
          'Authorization': localStorage.getItem('jwt'),
        },
        data: {
          "movieId": props.movie.id,
          "comment": userComment
        }
      }).then(res => {
        setComments([res.data, ...comments]);
        setUserComment("");
      });
    } catch (err) {
      // err.response.data.Error && setError(err.response.data.Error);
    }
  }
  console.log("movie", props.movie)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}>
      <Modal.Header closeButton>
        <Modal.Title style={{
          display: "flex",
          alignItems: "center"
        }} id="contained-modal-title-vcenter">
          {props.movie.title}
          {isFavoriteMovieFound ? (
            <StarRoundedIcon style={{
              color: "black",
              fontSize: "24px",
              cursor: "pointer",
              marginLeft: "5px"
            }} onClick={() => removeFavorite()} />
          ) : (
            <StarBorderRoundedIcon style={{
              color: "black",
              fontSize: "24px",
              cursor: "pointer",
              marginLeft: "5px"
            }} onClick={() => addFavorite()} />
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr"
        }}>
          <div style={{
            gridColumn: "1 / span 1",
            display: "grid",
            gridTemplateRows: "3fr 1fr"
          }}>
            <div style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gridRow: "1 / span 1",
              paddingLeft: "10px",
            }}>
              <p>
                {props.movie.overview}
              </p>
            </div>
            <div style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              gridRow: "2 / span 1"
            }}>
              <p style={{
                fontSize: "14px",
                marginBlock: "0px",
                fontWeight: 600
              }}>Average Rating: {props.movie.vote_average} / 10</p>
              <p style={{
                fontSize: "14px",
                marginBlock: "0px",
                fontWeight: 600
              }}>Release Date: {props.movie.release_date}</p>
            </div>
          </div>
          <div style={{
            gridColumn: "2 / span 1",
            justifyContent: "center",
            display: "flex",
            alignItems: "center"
          }}>
            <img className="moviePoster movie-card modal-img" key={props.movie.key} src={props.movie.poster_path ? "https://image.tmdb.org/t/p/original" + props.movie.poster_path : require("../Assets/no_poster.jpg")} width="200px" height="300px" alt="movie poster"></img>
          </div>
        </div>
        <form onSubmit={onSubmit} className="form-comment" style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}>
          <div className="form-group">
            {commentCountUpdate()}

            <Form.Control style={{
              width: "400px"
            }} as="textarea" rows="2" placeholder="Add a comment" onChange={(e) => setUserComment(e.target.value)} />
          </div>
          <button style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "250px",
            borderRadius: "12px",
            backgroundColor: "#343a40",
            cursor: "pointer",
            color: "white",
            fontSize: "26px",
            fontWeight: 600
          }}>Post</button>
        </form>
        {comments.map(currentComment => <Comments comment={currentComment} key={currentComment._id} movie={props.movie} />)}
      </Modal.Body>
      <Modal.Footer style={{
        justifyContent: "center"
      }}>
        <div onClick={props.onHide} style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
          width: "100px",
          borderRadius: "8px",
          backgroundColor: "#343a40",
          cursor: "pointer"
        }}><p style={{
          color: "white",
          fontSize: "20px",
          fontWeight: 600,
          marginBlock: "0px"
        }}>Close</p></div>
      </Modal.Footer>
    </Modal>
  );
}