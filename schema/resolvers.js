const resolvers = {
    Query: {
        friends: () => friends,
        trending: async (_, { api_key='27d24c908a5cad31bea867f46aaaa316', media_type, time_window}, { dataSources }) => {
            const respData = await dataSources.movieApi.getTrendingMovies(api_key, media_type, time_window)
            return respData.results
        }
    }
}

const friends = [
    { name: 'Chris'},
    { name: 'Dan'}
]

module.exports = { resolvers }