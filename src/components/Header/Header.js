import React from "react";
import './Header.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from "../Navigation/Navigation";

function Header(props) {
    let { pathname } = useLocation();

    return(
        <header className={ pathname === "/" ? "header" : "header header-dark"}>
            <Logo />
            <Routes>
                <Route path="/" element={<Navigation loggedIn="false" />} />
                <Route path="/movies" element={<Navigation loggedIn={ props.loggedIn } />} />
                <Route path="/saved-movies" element={ <Navigation /> }></Route>
                <Route path="/profile" element={ <Navigation /> }></Route>
            </Routes>
        </header>
    );
}

export default Header