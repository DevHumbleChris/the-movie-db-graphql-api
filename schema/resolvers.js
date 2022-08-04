const resolvers = {
    Query: {
        trending: async (_, { media_type, time_window}, { dataSources }) => {
            const respData = await dataSources.movieApi.getTrendingMovies(media_type, time_window)
            return respData.results
        },
        tv: async (_, { tv_id }, { dataSources }) => {
            const respData = await dataSources.movieApi.getTvDetails(tv_id)
            return respData
        },
        movie: async (_, { movie_id }, { dataSources }) => {
            const respData = await dataSources.movieApi.getMovieDetails(movie_id)
            return respData
        }
    },
    TvQuery: {
        details: (parent) => {
            return parent
        },
        recommendations: async ({ id: tv_id }, _, { dataSources }) => {
            const respData = await dataSources.movieApi.getTvRecommendations(tv_id)
            return respData.results
        },
        latest: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getTvLatest()
            return respData
        },
        airing_today: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getAiringToday()
            return respData.results
        },
        on_the_air: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getOnTheAir()
            return respData.results
        },
        popular: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getPopular()
            return respData.results
        },
        top_rated: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getTopRated()
            return respData.results
        },
        similar_tv_shows: async ({ id: tv_id}, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getSimilarTvShows(tv_id)
            return respData.results
        }
    },
    TvDetails: {
        videos: async ({ id: tv_id }, _, { dataSources }) => {
            const respData = await dataSources.movieApi.getVideos( tv_id)
            return respData.results
        }
    }
}

const friends = [
    { name: 'Chris'},
    { name: 'Dan'}
]

module.exports = { resolvers }