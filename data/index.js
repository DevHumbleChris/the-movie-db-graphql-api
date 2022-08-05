const { RESTDataSource } = require('apollo-datasource-rest')

class MovieAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.themoviedb.org/3/'
    }
    willSendRequest(request) {
        request.params.set('api_key', this.context.api_key)
    }
    getTrendingMovies(media_type, time_window) {
        return this.get(`trending/${media_type}/${time_window}`)
    }
    getAllDayTrending() {
        return this.get(`trending/all/day`)
    }
    getTvDetails(tv_id) {
        return this.get(`tv/${tv_id}`)
    }
    getTvRecommendations(tv_id) {
        return this.get(`tv/${tv_id}/recommendations`)
    }
    getTvLatest() {
        return this.get(`tv/latest`)
    }
    getAiringToday() {
        return this.get('tv/airing_today')
    }
    getOnTheAir() {
        return this.get('tv/on_the_air')
    }
    getPopular() {
        return this.get('tv/popular')
    }
    getTopRated() {
        return this.get('tv/top_rated')
    }
    getSimilarTvShows(tv_id) {
        return this.get(`tv/${tv_id}/similar`)
    }
    getVideos(tv_id) {
        return this.get(`tv/${tv_id}/videos`)
    }
    getMovieDetails(movie_id) {
        return this.get(`movie/${movie_id}`)
    }
    getMovieRecommendations(movie_id) {
        return this.get(`/movie/${movie_id}/recommendations`)
    }
}

module.exports = { MovieAPI }