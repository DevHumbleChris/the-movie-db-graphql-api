const { RESTDataSource } = require('apollo-datasource-rest')

class MovieAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.themoviedb.org/3/'
    }
    getTrendingMovies(api_key, media_type, time_window) {
        return this.get(`trending/${media_type}/${time_window}`, {
            api_key
        })
    }
    getTvDetails(api_key, tv_id) {
        return this.get(`tv/${tv_id}`, {
            api_key
        })
    }
    getTvRecommendations(api_key, tv_id) {
        return this.get(`tv/${tv_id}/recommendations`, {
            api_key
        })
    }
    getTvLatest(api_key) {
        return this.get(`tv/latest`, {
            api_key
        })
    }
    getAiringToday(api_key) {
        return this.get('tv/airing_today', {
            api_key
        })
    }
    getOnTheAir(api_key) {
        return this.get('tv/on_the_air', {
            api_key
        })
    }
    getPopular(api_key) {
        return this.get('tv/popular', {
            api_key
        })
    }
    getTopRated(api_key) {
        return this.get('tv/top_rated', {
            api_key
        })
    }
    getSimilarTvShows(api_key, tv_id) {
        return this.get(`tv/${tv_id}/similar`, {
            api_key
        })
    }
    getVideos(api_key, tv_id) {
        return this.get(`tv/${tv_id}/videos`, {
            api_key
        })
    }
}

module.exports = { MovieAPI }