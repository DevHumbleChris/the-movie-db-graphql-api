const resolvers = {
    Query: {
        trending: async (_, { api_key='27d24c908a5cad31bea867f46aaaa316', media_type, time_window}, { dataSources }) => {
            const respData = await dataSources.movieApi.getTrendingMovies(api_key, media_type, time_window)
            return respData.results
        },
        tv: async (_, { api_key='27d24c908a5cad31bea867f46aaaa316', tv_id }, { dataSources }) => {
            const respData = await dataSources.movieApi.getTvDetails(api_key, tv_id)
            return respData
        }
    },
    TvQuery: {
        details: (parent) => {
            return parent
        },
        recommendations: async ({ id: tv_id }, _, { dataSources }) => {
            const respData = await dataSources.movieApi.getTvRecommendations(api_key='27d24c908a5cad31bea867f46aaaa316', tv_id)
            return respData.results
        },
        latest: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getTvLatest(api_key='27d24c908a5cad31bea867f46aaaa316')
            return respData
        },
        airing_today: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getAiringToday(api_key='27d24c908a5cad31bea867f46aaaa316')
            return respData.results
        },
        on_the_air: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getOnTheAir(api_key='27d24c908a5cad31bea867f46aaaa316')
            return respData.results
        },
        popular: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getPopular(api_key='27d24c908a5cad31bea867f46aaaa316')
            return respData.results
        },
        top_rated: async (_, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getTopRated(api_key='27d24c908a5cad31bea867f46aaaa316')
            return respData.results
        },
        similar_tv_shows: async ({ id: tv_id}, __, { dataSources }) => {
            const respData = await dataSources.movieApi.getSimilarTvShows(api_key='27d24c908a5cad31bea867f46aaaa316', tv_id)
            return respData.results
        }
    },
    TvDetails: {
        videos: async ({ id: tv_id }, _, { dataSources }) => {
            const respData = await dataSources.movieApi.getVideos(api_key='27d24c908a5cad31bea867f46aaaa316', tv_id)
            return respData.results
        }
    }
}

const friends = [
    { name: 'Chris'},
    { name: 'Dan'}
]

module.exports = { resolvers }