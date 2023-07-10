import { React, useState } from "react";
import './Navigation.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import NavigationBtn from "../NavigationBtn/NavigationBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navigation(props) {
    let { pathname } = useLocation();
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    function handleBurgerBtnClick() {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }

    function closeBurgerMenu() {
        setIsBurgerMenuOpen(false);
    }

    const navigationHeaderLanding = (
        <>
            <Link to='/signup' className="navigation__auth-link">
                <button className="navigation__register-btn" type="button">Регистрация</button>
            </Link>
            <Link to="/signin"><LoginBtn /></Link>
        </>
    )

    const navigationHeader = (
        <>
            <div className="navigation-hidden">
                <ul className="navigation__container-link">
                    <li>
                        <NavLink className="navigation__link" to='/movies'>Фильмы</NavLink>
                    </li>
                    <li>
                        <NavLink className="navigation__link" to='/saved-movies'>Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <Link className="navigation__profile-btn" to="/profile"><NavigationBtn /></Link>
            </div>
        </>
    )

    const navigation = props.loggedIn ? navigationHeaderLanding : navigationHeader;

    return(
        <nav className={pathname !== "/" ? "navigation" : "navigation-landing"} id="navigation-menu">
            {navigation}
            <BurgerBtn onClick={handleBurgerBtnClick} />
            <BurgerMenu
                isOpen={isBurgerMenuOpen}
                onClose={closeBurgerMenu}
            />
        </nav>
    )
}

export default Navigation