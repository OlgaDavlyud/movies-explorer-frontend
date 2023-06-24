import React from "react";
import './Navigation.css';
import { Link } from 'react-router-dom';
import NavigationBtn from "../NavigationBtn/NavigationBtn";

function Navigation() {
    return(
        <nav className="navigation">
            <div className="navigation__container">
                <Link className="navigation__link" to='/movies'>Фильмы</Link>
                <Link className="navigation__link" to='/saved-movies'>Сохранённые фильмы</Link>
            </div>
            <Link className="navigation__profile-btn" to="/profile"><NavigationBtn /></Link>
        </nav>
    )
}

export default Navigation