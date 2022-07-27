const { gql } = require('apollo-server-express')

const typeDefs = gql`
    scalar Date
    type Friend {
        name: String
    }
    type Query {
        friends: [Friend]
        trending(api_key: String!, media_type: String!, time_window: String!): [MovieDetails]
    }
    type MovieDetails {
        id: Int
        name: String
        title: String 
        adult: Boolean
        backdrop_path: String
        poster_path: String
        original_language: String
        popularity: Float
        vote_average: Float
        vote_count: Int
        first_air_date: Date
        release_date: Date
        video: Boolean
        media_type: String
        gender: Int
        profile_path: String
        known_for: [MovieDetails]
    }
`

module.exports = { typeDefs }