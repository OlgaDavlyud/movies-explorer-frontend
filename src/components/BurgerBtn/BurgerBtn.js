import React from "react";
import "./BurgerBtn.css";
import { useLocation } from "react-router-dom";

function BurgerBtn(props) {
    let { pathname } = useLocation();

    const isRoot = pathname === '/'

    return(
        <button className={props.loggedIn ? "burger-btn-hidden" : "burger-btn" && isRoot ? "burger-btn burger-btn-landing" : "burger-btn" } type="button" onClick={props.onClick} />
    )
}

export default BurgerBtn