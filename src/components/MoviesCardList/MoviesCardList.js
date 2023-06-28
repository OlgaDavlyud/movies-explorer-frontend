import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

    return(
        <section className="movie-card-list">
            <div className="section__cards">
                {
                    props.movies.map((movie) => (
                    <MoviesCard
                        movie={movie}
                    />
                ))}
            </div>
        </section>
    )
};

export default MoviesCardList
