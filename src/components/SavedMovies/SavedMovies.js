import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreBtn from '../MoreBtn/MoreBtn';
import { savedMoviesList } from '../../utils/constants';

function SavedMovies() {
    return(
        <main className='saved-movie'>
            <SearchForm />
            <MoviesCardList movies={savedMoviesList} />
            <MoreBtn />
        </main>
    );
}

export default SavedMovies