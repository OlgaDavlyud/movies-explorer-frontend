import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

    return(
        <section className="movie-card-list">
            <ul className="movie-card-list__section-cards">
                {
                    props.movies.map((movie) => (
                    <MoviesCard
                        key={movie.movieId}
                        movie={movie}
                    />
                ))}
            </ul>
        </section>
    )
};

export default MoviesCardList
