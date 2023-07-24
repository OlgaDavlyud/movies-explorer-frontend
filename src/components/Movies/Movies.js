import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreBtn from '../MoreBtn/MoreBtn';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/Api/MoviesApi';
import { filterMovies } from '../../utils/functions/filterMovies';
import { filterShortMovies } from '../../utils/functions/filterShortMovies';

function Movies({props}) {
    const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('all-movies')) || []);
    const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filtered-movies')) || []);
    const [isBtnHidden, setIsBtnHidden] = useState(false);
    const [isPreloaderHidden, setIsPreloaderHidden] = useState(true);

  useEffect(() =>{
        moviesApi
        .getInitialMovies()
        .then((dataMovies) => {
            setAllMovies(dataMovies)
            localStorage.setItem("all-movies", JSON.stringify(dataMovies))
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    function getFilterMovies(keyWord, isShortMovies) {
        let filtredArrayMovies;
        console.log(isShortMovies)

        if(isShortMovies) {
            filtredArrayMovies = (filterShortMovies(filterMovies(allMovies, keyWord)));
        } else {
            filtredArrayMovies = (filterMovies(allMovies, keyWord));
        }
        setFilteredMovies(filtredArrayMovies)
        localStorage.setItem("filtered-movies", JSON.stringify(filtredArrayMovies));
    }

    function loadingMoreMovies() {
        setIsBtnHidden(true);
        setIsPreloaderHidden(false);
    }

    return(
        <main className="movie">
            <SearchForm
            handleSubmit={getFilterMovies}
            />
            <MoviesCardList
                movies={filteredMovies}
                // onCardLike={onCardLike}
                // onSaveMovie={onSaveMovie}
            />
            <MoreBtn onClick={loadingMoreMovies} hidden={isBtnHidden}/>
            <Preloader hidden={isPreloaderHidden}/>
        </main>
    );
}

export default Movies