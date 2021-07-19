import gql from 'graphql-tag';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
            email
            movieCount
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
`