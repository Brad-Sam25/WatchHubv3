import { gql } from '@apollo/client';


export const LOGIN_USER =  gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER =  gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_MOVIE =  gql`
    mutation saveMovie($input: savedMovie!) {
        saveMovie(input: $input) {
            _id
            username
            email
            savedMovies {
                MovieId
                actors
                plot
                title
                image
                link
            }
        }
    }
`;

export const REMOVE_MOVIE =  gql`
    mutation removeMovie($movieId: ID!) {
        removemovie(movieId: $movieId) {
            _id
            username
            email
            savedMovies {
                movieId
                actors
                plot
                title
                image
                link
            }
        }
    }
`;
export const ADD_POST = gql`
    mutation addPost($postText: String!, $postAuthor: String!) {
        addPost(postText: $postText, postAuthor: $postAuthor) {
            _id
            name
            postText
            postAuthor
        }
    }
`;
export const REMOVE_COMMENT = gql`
    mutation removeComment($commentText: String!, $commentAuthor: String!) {
        removeComment(commentText: $commentText, commentAuthor: $commentAuthor) {
            token
            profile{
                _id
                name
            }
            
        }
    }
`;
