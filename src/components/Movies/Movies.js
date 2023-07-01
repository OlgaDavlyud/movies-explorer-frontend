import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreBtn from '../MoreBtn/MoreBtn';
import { moviesList } from '../../utils/constants';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';

function Movies() {
    const [isBtnHidden, setIsBtnHidden] = useState(false);
    const [isPreloaderHidden, setIsPreloaderHidden] = useState(true);

    function loadingMoreMovies() {
        setIsBtnHidden(true);
        setIsPreloaderHidden(false);
    }

    return(
        <main className="movie">
            <SearchForm />
            <MoviesCardList movies={moviesList} />
            <MoreBtn onClick={loadingMoreMovies} hidden={isBtnHidden}/>
            <Preloader hidden={isPreloaderHidden}/>
        </main>
    );
}

export default Movies