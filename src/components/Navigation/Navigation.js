import React from "react";
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import NavigationBtn from "../NavigationBtn/NavigationBtn";
import LoginBtn from "../LoginBtn/LoginBtn";

function Navigation(props) {
    let { pathname } = useLocation();

    const navigationHeader = props.loggedIn ? (
        <>
                <Link to='/signup' className="navigation__auth-link">Регистрация</Link>
                <Link to="/signin"><LoginBtn /></Link>
        </>
    ) : (
        <>
                <div className="navigation__container-link">
                    <Link className="navigation__link" to='/movies'>Фильмы</Link>
                    <Link className="navigation__link" to='/saved-movies'>Сохранённые фильмы</Link>
                </div>
                <Link className="navigation__profile-btn" to="/profile"><NavigationBtn /></Link>
        </>
    )
    return(
        <nav className={pathname !== "/" ? "navigation" : "navigation-landing"}>
            {navigationHeader}
        </nav>
    )
}

export default Navigation