import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({movies, onCardLike, onSaveMovie, onCardDelite }) {

    return(
        <section className="movie-card-list">
            <ul className="movie-card-list__section-cards">
                {
                    movies.map((movie) => (
                    <MoviesCard
                        key={movie.id}
                        movie={movie}
                        onCardLike={onCardLike}
                        onSaveMovie={onSaveMovie}
                        onCardDelite={onCardDelite}
                    />
                ))}
            </ul>
        </section>
    )
};

export default MoviesCardList
