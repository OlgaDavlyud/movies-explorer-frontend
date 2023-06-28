import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreBtn from '../MoreBtn/MoreBtn';
import { moviesList } from '../../utils/constants';
// import Preloader from '../Preloader/Preloader';

function Movies() {
    return(
        <main className="movie">
            <SearchForm />
            <MoviesCardList movies={moviesList} />
            <MoreBtn />
            {/* <Preloader /> */}
        </main>
    );
}

export default Movies