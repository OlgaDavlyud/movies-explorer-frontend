import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

    return(
        <section className="movie-card-list">
            <div className="movie-card-list__section-cards">
                {
                    props.movies.map((movie) => (
                    <MoviesCard
                        key={movie.movieId}
                        movie={movie}
                    />
                ))}
            </div>
        </section>
    )
};

export default MoviesCardList
