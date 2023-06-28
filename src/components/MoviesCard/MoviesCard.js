import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({movie}) {
    let { pathname } = useLocation();
    const { img, title, time } = movie

    return(
        <div className="card__movie">
            <img className="card__img" src={img} alt="Заставка фильма" />
            <div className="card__element">
                <h2 className="card__title">{title}</h2>
                <button className={pathname === "/movies" ? "card__button-save" : "card__button-delete"} type="button"></button>
            </div>
            <p className="movie__time">{time}</p>
        </div>
    );
}

export default MoviesCard