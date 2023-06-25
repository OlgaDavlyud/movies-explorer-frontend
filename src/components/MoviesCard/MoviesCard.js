import React from "react";
import './MoviesCard.css';

function MoviesCard(props) {
    return(
        <div className="card__movie">
            <img className="card__img" src={props.img} alt="Заставка фильма" />
            <div className="card__element">
                <h2 className="card__title">{props.title}</h2>
                <button className="card__button-save" type="button"></button>
            </div>
            <p className="movie__time">{props.time}</p>
        </div>
    );
}

export default MoviesCard