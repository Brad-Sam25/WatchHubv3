import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
    mutation addProfile($name: String!, $email: String!, $password: String!) {
        addProfile(name: $name, email: $email, password: $password) {
            token
            profile{
                _id
                name
            }
            
        }
    }
`;
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            profile{
                _id
                name
            }
            
        }
    }
`;
export const ADD_FAVORITE = gql`
    mutation addFavorite( $favorite: String! ) {
        addFavorite( favorite: $favorite ) {
                _id
                name
                favorites
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
export const REMOVE_POST = gql`
    mutation removePost($postText: String!, $postAuthor: String!) {
        removePost(postText: $postText, postAuthor: $postAuthor) {
            token
            profile{
                _id
                name
            }
            
        }
    }
`;
export const REMOVE_COMMENT = gql`
    mutation addPost($postText: String!, $postAuthor: String!) {
        addPost(postText: $postText, postAuthor: $postAuthor) {
            token
            profile{
                _id
                name
            }
            
        }
    }
`;