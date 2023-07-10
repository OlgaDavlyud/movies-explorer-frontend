import React from "react";
import "./BurgerBtn.css";
import { useLocation } from "react-router-dom";

function BurgerBtn(props) {
    let { pathname } = useLocation();

    return(
        <button className={pathname !== '/' ? "burger-btn" : "burger-btn-hidden" } type="button" onClick={props.onClick} />
    )
}

export default BurgerBtn