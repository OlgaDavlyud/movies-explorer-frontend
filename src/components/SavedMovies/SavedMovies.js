import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import mainApi from '../../utils/Api/MainApi';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies(props) {
    const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem("saved-movies")) || []);

    useEffect(() =>{
        mainApi
        .getInitialSavedMovies()
        .then((dataMovies) =>{
            console.log(dataMovies)
            setSavedMovies(dataMovies)
            localStorage.setItem("saved-movies", JSON.stringify(dataMovies))
        })
    }, [])

    function handleDeleteMovie(movieId) {
        mainApi
        .deleteSavedMovie(movieId)
    }

    return(
        <main className='saved-movie'>
            <SearchForm />
            <SavedMoviesCardList
                movies={savedMovies}
                onDeleteMovie={handleDeleteMovie} />
            <div className='decoration-block'></div>
        </main>
    );
}

export default SavedMovies