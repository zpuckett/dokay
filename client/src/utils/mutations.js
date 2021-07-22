import gql from 'graphql-tag';

export const LOGIN_USER = gql`
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

export const ADD_USER = gql`
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

export const ADD_MUSIC = gql`
    mutation addMusic($songId: ID!) {
        addMusic(songUrl: $songId) {
            _id
            songName
            url
            genre
        }
    }
`;

export const ADD_IMAGE = gql`
    mutation addImage($imageID: ID!) {
        addImage(imageName: $imageID) {
            _id
            imageName
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            _id
            username
        }
    }
`;
