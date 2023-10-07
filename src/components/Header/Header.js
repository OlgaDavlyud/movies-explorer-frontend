import React from "react";
import './Header.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from "../Navigation/Navigation";


function Header(props) {
    let { pathname } = useLocation();

    const isRoot = pathname === '/'
    const visible = isRoot || pathname === '/movies' || pathname === '/profile' || pathname === '/saved-movies';

    return(
        <>
            { visible && (
                <header className={ isRoot ? "header header-authorised" : "header header-dark"}>
                    <Logo />
                    <Routes>
                        <Route path="/" element={<Navigation loggedIn={props.loggedIn} />} />
                        <Route path="/movies" element={<Navigation loggedIn={props.loggedIn} />} />
                        <Route path="/saved-movies" element={ <Navigation loggedIn={props.loggedIn} /> }></Route>
                        <Route path="/profile" element={ <Navigation loggedIn={props.loggedIn} /> }></Route>
                    </Routes>
                </header>
            )}
        </>
    );
}


export default Header