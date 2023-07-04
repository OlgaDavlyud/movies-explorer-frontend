import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({movie}) {
    let { pathname } = useLocation();
    const { trailerLink, image, description, nameRU, duration } = movie;

    return(
        <div className="card-movie" id={movie.Id}>
            <a className="card-movie__link" href={trailerLink} target="blank" rel="noopener noreferrer">
                <img className="card-movie__img" src={image} alt={description} />
            </a>
            <div className="card-movie__element">
                <h2 className="card-movie__title">{nameRU}</h2>
                <button className={pathname === "/movies" ? "card-movie__button-save" : "card-movie__button-delete"} type="button"></button>
            </div>
            <p className="card-movie__time">{duration}</p>
        </div>
    );
}

export default MoviesCard