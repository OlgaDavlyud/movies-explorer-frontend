import React from "react";
import { Link } from "react-router-dom";
import './BurgerMenu.css';
import NavigationBtn from "../NavigationBtn/NavigationBtn";

function BurgerMenu(props) {

    return(
        <div className={`burger-menu ${props.isOpen && 'burger-menu_opened'}`}>
            <div className="burger-menu__container">
                <button
                    className="burger-menu__button-close"
                    type="button"
                    name="button-close"
                    onClick={props.onClose}
                />
                <ul className="burger-menu__links">
                    <li>
                        <Link className="burger-menu__link" to='/'>Главная</Link>
                    </li>
                    <li>
                        <Link className="burger-menu__link" to='/movies'>Фильмы</Link>
                    </li>
                    <li>
                        <Link className="burger-menu__link" to='/saved-movies'>Сохранённые фильмы</Link>
                    </li>
                </ul>
                <Link className="burger__profile-btn" to="/profile"><NavigationBtn /></Link>
            </div>
        </div>
    )
}

export default BurgerMenu