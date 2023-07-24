// import React, { useContext } from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({movie, onCardLike, onSaveMovie, onCardDelite}) {
    // const currentUser = useContext(CurrentUserContext);
    let { pathname } = useLocation();

    const { trailerLink, image, description, nameRU, duration } = movie;

    const hours = parseInt((duration / 60).toString());
    const minutes = duration % 60 < 10
        ? '0' + Math.ceil(duration % 60).toString()
        : Math.ceil(duration % 60).toString();
    const durationTime = hours + 'ч' + minutes + 'м';

    // const isLiked = movie.likes.some(i => i._id === currentUser._id);
    // const movieSaveButtonClassName = (
    //     `card-movie__button-save ${isLiked && 'card-movie__button-save:active'}`
    //  );

    // function handleSaveClick() {
    //     onCardLike(movie);
    //     onSaveMovie(movie);
    // }

    // function handleDeleteClick() {
    //     onCardDelite(movie);
    // }

    return(
        <li className="card-movie" id={movie.Id}>
            <a className="card-movie__link" href={trailerLink} target="_blank" rel="noopener noreferrer">
                <img className="card-movie__img" src={"https://api.nomoreparties.co" + image.url} alt={description} />
            </a>
            <div className="card-movie__element">
                <h2 className="card-movie__title">{nameRU}</h2>
                <button className={pathname === "/movies" ? "card-movie__button-save" : "card-movie__button-delete"} 
                type="button"
                // onClick={pathname === "/movies" ? {handleSaveClick} : {handleDeleteClick}}
                >
                </button>
            </div>
            <p className="card-movie__time" id="duration">{durationTime}</p>
        </li>
    );
}

export default MoviesCard