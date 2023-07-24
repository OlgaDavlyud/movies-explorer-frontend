import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreBtn from '../MoreBtn/MoreBtn';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';

function Movies({movies, onCardLike, onSaveMovie}) {
    const [isBtnHidden, setIsBtnHidden] = useState(false);
    const [isPreloaderHidden, setIsPreloaderHidden] = useState(true);

    function loadingMoreMovies() {
        setIsBtnHidden(true);
        setIsPreloaderHidden(false);
    }

    return(
        <main className="movie">
            <SearchForm />
            <MoviesCardList
                movies={movies}
                onCardLike={onCardLike}
                onSaveMovie={onSaveMovie}
            />
            <MoreBtn onClick={loadingMoreMovies} hidden={isBtnHidden}/>
            <Preloader hidden={isPreloaderHidden}/>
        </main>
    );
}

export default Movies