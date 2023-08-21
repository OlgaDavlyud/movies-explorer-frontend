import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import mainApi from '../../utils/Api/MainApi';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import { filterMovies } from '../../utils/functions/filterMovies';
import { filterShortMovies } from '../../utils/functions/filterShortMovies';
import Preloader from '../Preloader/Preloader';
import MoviesStringAlert from '../MoviesStringAlert/MoviesStringAlert';

function SavedMovies() {
    const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem("saved-movies")) || []);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loadedMovies, setLoadedMovies] = useState(false);
    const [isMoviesLoading, setIsMoviesLoading] = useState(false);
    const [stringAlert, setStringAlert] = useState({isVisible: false, message: ""});

    useEffect(() =>{
        if (!savedMovies.lenght) {
            setLoadedMovies(true);
        }
        mainApi
        .getInitialSavedMovies()
        .then((dataMovies) =>{
            setSavedMovies(dataMovies)
            setFilteredMovies(dataMovies)
            localStorage.setItem("saved-movies", JSON.stringify(dataMovies))
        })
        .catch(err => {
                console.log(err);
                setStringAlert({ isVisible: true, message: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" })
        })
        .finally(() => {
            setLoadedMovies(false)
            setIsMoviesLoading(true)
        })
    }, [])

    useEffect(() => {
        if (isMoviesLoading && !filteredMovies.length) {
            setStringAlert({ isVisible: true, message: "Ничего не найдено" })
        } else if (filteredMovies.length) {
            setStringAlert({ isVisible: false, message: "" });
        }
    }, [savedMovies, filteredMovies, isMoviesLoading])

    function getfilteredSavedMovies(keyWord, isShortMovies) {
        if (isShortMovies) {
            setFilteredMovies(filterShortMovies(filterMovies(savedMovies, keyWord)));
        } else {
            setFilteredMovies(filterMovies(savedMovies, keyWord));
        }
        setIsMoviesLoading(true);
    }

    function handleDeleteMovie(movieId) {
        mainApi
        .deleteSavedMovie(movieId)
        .then((res) => {
            console.log(res)
            setSavedMovies((savedMovies) => savedMovies.filter((c) => c._id !== movieId))
        })
        .catch(err => console.log(err))
    }

    return(
        <main className='saved-movie'>
            <SearchForm
                handleSubmit={getfilteredSavedMovies}/>
            <SavedMoviesCardList
                movies={filteredMovies}
                onDeleteMovie={handleDeleteMovie} />
            {stringAlert.isVisible ? <MoviesStringAlert text={stringAlert.message} /> : null}
            {loadedMovies ? <Preloader /> : null}
        </main>
    );
}

export default SavedMovies