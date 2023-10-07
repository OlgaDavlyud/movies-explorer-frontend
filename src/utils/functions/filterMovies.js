export function filterMovies(initialMovies, keyword) {
    return initialMovies.filter((movie) => {
        if (movie.nameRU && movie.nameEN) {
            return (movie.nameRU + movie.nameEN).toLowerCase().includes(keyword.toLowerCase());
        } else if (movie.nameRU) {
            return (movie.nameRU).toLowerCase().includes(keyword.toLowerCase());
        } else if (movie.nameEN) {
            return (movie.nameEN).toLowerCase().includes(keyword.toLowerCase());
        } else {
            return false
        }
    })
}