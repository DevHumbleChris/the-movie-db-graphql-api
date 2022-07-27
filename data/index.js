const { RESTDataSource } = require('apollo-datasource-rest')

class MovieAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.themoviedb.org/3/'
    }
    getTrendingMovies(api_key='27d24c908a5cad31bea867f46aaaa316', media_type, time_window) {
        return this.get(`trending/${media_type}/${time_window}`, {
            api_key
        })
    }
}

module.exports = { MovieAPI }