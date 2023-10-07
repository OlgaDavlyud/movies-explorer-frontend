import { DURATION_SHORT_MOVIE } from '../constants';

export function filterShortMovies(initialMovies) {
    return initialMovies.filter((movie) => movie.duration <= DURATION_SHORT_MOVIE)
}