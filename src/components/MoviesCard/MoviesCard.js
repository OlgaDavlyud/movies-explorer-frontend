import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({movie}) {
    let { pathname } = useLocation();
    const { image, description, nameRU, duration } = movie;

    return(
        <div className="card__movie" id={movie.Id}>
            <img className="card__img" src={image} alt={description} />
            <div className="card__element">
                <h2 className="card__title">{nameRU}</h2>
                <button className={pathname === "/movies" ? "card__button-save" : "card__button-delete"} type="button"></button>
            </div>
            <p className="movie__time">{duration}</p>
        </div>
    );
}

export default MoviesCard