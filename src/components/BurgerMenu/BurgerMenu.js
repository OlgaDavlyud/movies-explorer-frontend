import React from "react";
import { NavLink, Link } from "react-router-dom";
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
                <nav className="burger-menu__navigation" id="sidebar">
                    <ul className="burger-menu__links">
                        <li>
                            <NavLink className="burger-menu__link" to='/'>Главная</NavLink>
                        </li>
                        <li>
                            <NavLink className="burger-menu__link" to='/movies'>Фильмы</NavLink>
                        </li>
                        <li>
                            <NavLink className="burger-menu__link" to='/saved-movies'>Сохранённые фильмы</NavLink>
                        </li>
                    </ul>
                </nav>
                <Link className="burger__profile-btn" to="/profile"><NavigationBtn /></Link>
            </div>
        </div>
    )
}

export default BurgerMenu