import * as Types from '../type'
const reducerMoviesInittialState = {
    NetflixOriginal: null,
    TrendingMovies: null,
    TopRateMovies: null,
    ActionMovies: null,
    ComedyMovies: null,
    HorrorMovies: null,
    RomanceMovies: null,
    Documentaries: null,
    MovieDetaill: null,
    SearchMovies:null,

}

const reducerMovies = (state = reducerMoviesInittialState, action) => {
    const { type, payload } = action
    switch (type) {
        case Types.GET_NETFLIX_ORIGINALS:
            // console.log(payload);
            return { ...state, NetflixOriginal: payload }
        case Types.GET_TRENDING_MOVIES:
            // console.log(payload);
            return { ...state, TrendingMovies: payload }
        case Types.GET_ACTION_MOVIES:
            // console.log(payload);
            return { ...state, ActionMovies: payload }
        case Types.GET_COMEDY_MOVIES:
            // console.log(payload);
            return { ...state, ComedyMovies: payload }
        case Types.GET_HORROR_MOVIES:
            // console.log(payload);
            return { ...state, HorrorMovies: payload }
        case Types.GET_ROMANCE_MOVIES:
            // console.log(payload);
            return { ...state, RomanceMovies: payload }
        case Types.GET_TOPRATED_MOVIES:
            // console.log(payload);
            return { ...state, TopRateMovies: payload }
        case Types.GET_DOCUMENTARIES:
            // console.log(payload);
            return { ...state, Documentaries: payload }
        case Types.SET_MOVIE_DETAIL:
            // console.log(' payload movieDetail',payload);
            return { ...state, MovieDetaill: payload }
        case Types.GET_SEARCH_MOVIE:
            console.log(' payload GET_SEARCH_MOVIE',payload);
            return { ...state, SearchMovies: payload }


        default:
            return state
    }
}
export default reducerMovies;

