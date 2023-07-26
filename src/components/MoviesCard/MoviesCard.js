import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
    let { pathname } = useLocation();

    const { trailerLink, image, description, nameRU, duration } = props.movie;

    const hours = parseInt((duration / 60).toString());
    const minutes = duration % 60 < 10
        ? '0' + Math.ceil(duration % 60).toString()
        : Math.ceil(duration % 60).toString();
    const durationTime = hours + 'ч' + minutes + 'м';

    function handleSaveClick() {
        props.onSaveMovie(props.movie);
    }

    function handleDeleteClick() {
        if(pathname === "/movies") {
            props.onDeleteMovie(props.savedMovies.find(i => i.movieId === props.movie.id)._id)
        } else {
            props.onDeleteMovie(props.movie._id);
        }
    }

    return(
        <li className="card-movie">
            <a className="card-movie__link" href={trailerLink} target="_blank" rel="noopener noreferrer">
                <img className="card-movie__img" src={pathname === '/movies' ? "https://api.nomoreparties.co" + image.url : image} alt={description} />
            </a>
            <div className="card-movie__element">
                <h2 className="card-movie__title">{nameRU}</h2>
                <button className={pathname === "/movies" ? props.isSaved ? "card-movie__button-save card-movie__button-save-active" : "card-movie__button-save" : "card-movie__button-delete"}
                type="button"
                onClick={pathname === "/movies" ? props.isSaved ? handleDeleteClick : handleSaveClick : handleDeleteClick}
                >
                </button>
            </div>
            <p className="card-movie__time" id="duration">{durationTime}</p>
        </li>
    );
}

export default MoviesCard