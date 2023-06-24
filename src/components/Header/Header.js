import React from "react";
import './Header.css';
import { Routes, Route, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import HeaderBtn from "../HeaderBtn/HeaderBtn";
import Navigation from "../Navigation/Navigation";

function Header() {
    return(
        <header className="header">
            <Logo />
            <Routes>
                <Route path="/" element={
                    <nav className="header__navigation">
                        <Link to='/signup' className="header__auth-link">Регистрация</Link>
                        <Link to="/signin"><HeaderBtn /></Link>
                    </nav>
                }>
                </Route>
                <Route path="/movies" element={ <Navigation /> }></Route>
                <Route path="/saved-movies" element={ <Navigation /> }></Route>
                <Route path="/profile" element={ <Navigation /> }></Route>
            </Routes>
        </header>
    );
}

export default Header