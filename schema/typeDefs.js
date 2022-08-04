const { gql } = require("apollo-server-express");

const typeDefs = gql`
    scalar Date
    type Query {
        trending(media_type: String!, time_window: String!): [MovieDetails]
        tv(tv_id: Int): TvQuery
        movie(movie_id: Int): MovieInfoDetails
    }
    type MovieInfoDetails {
        id: ID
        adult: Boolean
        backdrop_path: String
        belongs_to_collection: BelongsToCollection
        budget: Float
        genres: [GenreDetails]
        homepage: String
        imdb_id: ID
        original_language: String
        original_title: String
        overview: String
        popularity: Float
        poster_path: String
        production_companies: [ProductionCompanies]
        production_countries: [ProductionCountries]
        release_date: Date
        revenue: Float
        spoken_languages: [Spokenlanguages]
        status: String
        tagline: String
        title: String
        video: Boolean
        vote_average: Float
        vote_count: Int
    }
    type BelongsToCollection {
        id: ID
        name: String
        poster_path: String
        backdrop_path: String
    }
    type TvQuery {
        details: TvDetails
        recommendations: [TvInfoDetails]
        latest: TvDetails
        airing_today: [TvInfoDetails]
        on_the_air: [TvInfoDetails]
        popular: [TvInfoDetails]
        top_rated: [TvInfoDetails]
        similar_tv_shows: [TvInfoDetails]
    }
    type TvInfoDetails {
        adult: Boolean
        backdrop_path: String
        id: ID
        name: String
        original_language: String
        original_name: String
        overview: String
        poster_path: String
        media_type: String
        genre_ids: [Int]
        popularity: Float
        first_air_date: Date
        vote_average: Float
        vote_count: Int
        origin_country: [String]
    }
    type TvDetails {
        id: ID 
        adult: Boolean
        backdrop_path: String
        created_by: [CreatedByDetails]
        episode_run_time: [Int]
        first_air_date: Date
        genres: [GenreDetails]
        homepage: String
        in_production: Boolean
        langauges: [String]
        last_air_date: Date
        last_episode_to_air: LastAirDateDetails
        networks: [NetworksDetails]
        number_of_episodes: Int
        number_of_seasons: Int
        origin_country: [String]
        original_language: String
        overview: String
        popularity: Float
        poster_path: String
        production_companies: [ProductionCompanies]
        production_countries: [ProductionCountries]
        seasons: [SeasonDetails]
        spoken_languages: [Spokenlanguages]
        status: String
        tagline: String
        type: String
        vote_average: Float
        vote_count: Int
        videos: [VideoDetails]
    }
    type VideoDetails {
        iso_639_1: String
        iso_3166_1: String
        name: String
        key: String
        site: String
        size: Int
        type: String
        published_at: Date
        official: Boolean
        id: ID
    }
    type LastAirDateDetails {
        air_date: Date
        episode_number: Int
        id: ID
        name: String
        overview: String
        production_code: String
        runtime: Int
        season_number: Int
        show_id: ID
        still_path: String
        vote_average: Float
        vote_count: Int
    }
    type Spokenlanguages {
        english_name: String
        iso_639_1: String
        name: String
    }
    type SeasonDetails {
        air_date: Date
        episode_count: Int
        id: ID
        name: String
        overview: String
        poster_path: String
        season_number: Int
    }
    type ProductionCountries {
        iso_3166_1: String
        name: String
    }
    type ProductionCompanies {
        id: ID
        logo_path: String
        name: String
        origin_country: String
    }
    type NetworksDetails {
        id: ID
        name: String
        logo_path: String
        origin_country: String
    }
    type GenreDetails {
        id: ID
        name: String
    }
    type CreatedByDetails {
        id: ID
        credit_id: ID
        name: String
        gender: Int
        profile_path: String
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
        overview: String
    }
`;

module.exports = { typeDefs };
