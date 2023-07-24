import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({movies, onCardDelite}) {
    return(
        <main className='saved-movie'>
            <SearchForm />
            <MoviesCardList
                movies={movies}
                onCardDelite={onCardDelite} />
            <div className='decoration-block'></div>
        </main>
    );
}

export default SavedMovies