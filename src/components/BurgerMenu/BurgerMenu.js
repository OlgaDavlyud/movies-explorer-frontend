import React from "react";
import { Link } from "react-router-dom";
import './BurgerMenu.css';
import NavigationBtn from "../NavigationBtn/NavigationBtn";

function BurgerMenu(props) {

    return(
        <div className={`burger-menu ${props.isOpen && 'burger-menu_opened'}`}>
            <button
                className="burger-menu__button-close"
                type="button"
                name="button-close"
                onClick={props.onClose}
            />
            <nav className="burger-menu__links">
                <Link className="burger-menu__link" to='/'>Главная</Link>
                <Link className="burger-menu__link" to='/movies'>Фильмы</Link>
                <Link className="burger-menu__link" to='/saved-movies'>Сохранённые фильмы</Link>
            </nav>
            <Link to="/profile"><NavigationBtn /></Link>
        </div>
    )
}

export default BurgerMenu