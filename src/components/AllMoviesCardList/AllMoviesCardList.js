import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from "../MoviesCard/MoviesCard";

function AllMoviesCardList(props) {

    const allMovies =
        props.movies.map((movie) => {
            const isSaved = props.savedMovies.some(i => i.movieId === movie.id)
            return (
                <MoviesCard
                    key={movie.id}
                    movie={movie}
                    isSaved={isSaved}
                    onSaveMovie={props.onSaveMovie}
                    onDeleteMovie={props.onDeleteMovie}
                    savedMovies={props.savedMovies}
                />)
            })

    return(
        <MoviesCardList>
            {allMovies}
        </MoviesCardList>
    )
}

export default AllMoviesCardList