import React from "react";
import './MoviesStringAlert.css';

function MoviesStringAlert(props) {
    return (
        <div className="movies-string-alert">
            <h2 className="movies-string-alert__text">{props.text}</h2>
        </div>
    )
}

export default MoviesStringAlert