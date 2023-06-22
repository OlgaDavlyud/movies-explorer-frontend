import React from "react";
import './Header.css';
import logo from '../../images/logo.svg'
// import { Routes, Route, Link } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
            <img
                className="header__logo"
                src={logo}
                alt="Логотип проекта"
            />
            <nav className="header__navigation">
                <a className="header__auth-link" href="/" target="blank" rel="noopener noreferrer">Регистрация</a>
                <button className="header__login-btn">Войти</button>
            </nav>
            {/* <Routes>
                <Route path="/sign-in" element={
                <Link className="header__auth-link" to="/sign-up">Регистрация</Link>}>
                </Route>
                <Route path="/sign-up" element={
                <Link className="header__auth-link" to="/sign-in">Войти</Link>}>
                </Route>
            </Routes> */}
        </header>
    );
}

export default Header