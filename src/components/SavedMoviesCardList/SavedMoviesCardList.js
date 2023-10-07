import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMoviesCardList(props) {
    const savesMovies =
    props.movies.map((movie) => {
        return (
            <MoviesCard
                key={movie._id}
                movie={movie}
                onSaveMovie={props.onSaveMovie}
                onDeleteMovie={props.onDeleteMovie}
            />)
        })
    return(
        <MoviesCardList>
            {savesMovies}
        </MoviesCardList>
    )
}

export default SavedMoviesCardList