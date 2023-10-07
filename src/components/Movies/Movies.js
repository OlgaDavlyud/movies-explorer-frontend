import React, { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoreBtn from '../MoreBtn/MoreBtn';
import { useState } from 'react';
import moviesApi from '../../utils/Api/MoviesApi';
import { filterMovies } from '../../utils/functions/filterMovies';
import { filterShortMovies } from '../../utils/functions/filterShortMovies';
import { DISPLAY_SIZE_1280, DISPLAY_SIZE_988, DISPLAY_SIZE_768, MOVIES_DISPLAYED_ADDITIONALLY } from '../../utils/constants';
import mainApi from '../../utils/Api/MainApi';
import Preloader from '../Preloader/Preloader';
import AllMoviesCardList from '../AllMoviesCardList/AllMoviesCardList';
import MoviesStringAlert from '../MoviesStringAlert/MoviesStringAlert';

function Movies(props) {
    const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('all-movies')) || []);
    const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filtered-movies')) || []);
    const [moviesToRender, setMoviesToRender] = useState(JSON.parse(localStorage.getItem('movies-to-render')) || []);
    const [initialMoviesCount, setInitialMoviesCount] = useState(0);
    const [addedMoviesCount, setAddedMoviesCount] = useState(0);
    const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('saved-movies')) || []);
    const [loadedMovies, setLoadedMovies] = useState(false);
    const [isMoviesLoading, setIsMoviesLoading] = useState(false);
    const [stringAlert, setStringAlert] = useState({isVisible: false, message: ""});

    const moviesToShowAmount = initialMoviesCount + addedMoviesCount;

    useEffect(() =>{
        if(props.displaySize >= DISPLAY_SIZE_1280) {
            setInitialMoviesCount(MOVIES_DISPLAYED_ADDITIONALLY.initialCardsDisplayXL);
            setAddedMoviesCount(MOVIES_DISPLAYED_ADDITIONALLY.addedCardsDisplayXL);
        } else if(props.displaySize > DISPLAY_SIZE_988) {
            setInitialMoviesCount(MOVIES_DISPLAYED_ADDITIONALLY.initialCardsDisplayL);
            setAddedMoviesCount(MOVIES_DISPLAYED_ADDITIONALLY.addedCardsDisplayL);
        } else if(props.displaySize <= DISPLAY_SIZE_988 && props.displaySize >= DISPLAY_SIZE_768) {
            setInitialMoviesCount(MOVIES_DISPLAYED_ADDITIONALLY.initialCardsDisplayM);
            setAddedMoviesCount(MOVIES_DISPLAYED_ADDITIONALLY.addedCardsDisplayMS);
        } else if(props.displaySize < DISPLAY_SIZE_768) {
            setInitialMoviesCount(MOVIES_DISPLAYED_ADDITIONALLY.initialCardsDisplayS);
            setAddedMoviesCount(MOVIES_DISPLAYED_ADDITIONALLY.addedCardsDisplayMS);
        }
    }, [props.displaySize]);

    useEffect(() =>{
        if(!moviesToRender.length) {
            setLoadedMovies(true);
        }
        moviesApi
        .getInitialMovies()
        .then((dataMovies) => {
            setAllMovies(dataMovies)
            localStorage.setItem("all-movies", JSON.stringify(dataMovies))
        })
        .catch((err) => {
            console.log(err)
            setStringAlert({ isVisible: true, message: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" })
        })
        .finally(() => {
            setLoadedMovies(false)
            setIsMoviesLoading(true)
         })
    }, []);

    useEffect(() =>{
        setStringAlert({ isVisible: false, message: "" });
        let moviesList = filteredMovies.slice(0, initialMoviesCount);
        setMoviesToRender(moviesList)
        if (isMoviesLoading && !moviesList.length) {
            setStringAlert({ isVisible: true, message: "Ничего не найдено" })
        }
        localStorage.setItem("movies-to-render", JSON.stringify(moviesList));
    }, [initialMoviesCount, filteredMovies, isMoviesLoading])

    useEffect(() =>{
        mainApi
        .getInitialSavedMovies()
        .then((dataMovies) =>{
            setSavedMovies(dataMovies)
            localStorage.setItem("saved-movies", JSON.stringify(dataMovies))
        })
        .catch(err => {
            console.log(err);
         })
    }, [])

    async function getFilterMovies(keyWord, isShortMovies) {
        let filtredArrayMovies;
        try {
            if(isShortMovies) {
                filtredArrayMovies = (filterShortMovies(filterMovies(allMovies, keyWord)));
            } else {
                filtredArrayMovies = (filterMovies(allMovies, keyWord));
            }
            setFilteredMovies(filtredArrayMovies)
            localStorage.setItem("filtered-movies", JSON.stringify(filtredArrayMovies));
        } catch (err) {
            setStringAlert({ isVisible: true, message: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" })
        }
        finally {
            setLoadedMovies(false)
            setIsMoviesLoading(true)
        }
    }

    function handleShowMoreMovies() {
        setInitialMoviesCount(moviesToShowAmount);
    }

    function handleSaveMovie(dataMovies) {
        mainApi
        .addSavedMovie({
            country: dataMovies.country,
            director: dataMovies.director,
            duration: dataMovies.duration,
            year: dataMovies.year,
            description: dataMovies.description,
            image: dataMovies.image.url ? `https://api.nomoreparties.co${dataMovies.image.url}` : '',
            trailerLink: dataMovies.trailerLink,
            thumbnail: dataMovies.image.formats.thumbnail.url ? 'https://api.nomoreparties.co' + dataMovies.image.formats.thumbnail.url : '',
            movieId: dataMovies.id,
            nameRU: dataMovies.nameRU,
            nameEN: dataMovies.nameEN,
        })
        .then((savedMovie) => {
            setSavedMovies(previewSavedMovie => {
                return[...previewSavedMovie, savedMovie];
            });
        })
        .catch(err => console.log(err))
    }

    function handleDeleteMovie(movieId) {
        mainApi
        .deleteSavedMovie(movieId)
        .then((res) => {
            console.log(res)
            setSavedMovies((savedMovies) => savedMovies.filter((c) => c._id !== movieId));
        })
        .catch(err => console.log(err))
    }

    return(
        <main className="movie">
            <SearchForm
                handleSubmit={getFilterMovies}
            />
            <AllMoviesCardList
                movies={moviesToRender}
                onSaveMovie={handleSaveMovie}
                savedMovies={savedMovies}
                onDeleteMovie={handleDeleteMovie}
            />
            {stringAlert.isVisible ? <MoviesStringAlert text={stringAlert.message} /> : null}
            {loadedMovies ? <Preloader /> : null}
            {moviesToRender.length !== filteredMovies.length && moviesToRender.length ? <MoreBtn
            onClick={handleShowMoreMovies}
            /> : null}
        </main>
    );
}

export default Movies