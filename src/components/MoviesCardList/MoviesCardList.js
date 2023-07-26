import React from "react";
import './MoviesCardList.css';

function MoviesCardList(props) {
    return(
        <section className="movie-card-list">
            <ul className="movie-card-list__section-cards">
                {props.children}
            </ul>
        </section>
    )
};

export default MoviesCardList
