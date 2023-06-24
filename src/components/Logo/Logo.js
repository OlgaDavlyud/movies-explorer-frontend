import React from "react";
import logo from '../../images/logo.svg'

function Logo() {
    return(
        <a href="/">
            <img
                className="header__logo"
                src={logo}
                alt="Логотип проекта"
            />
        </a>
    );
}

export default Logo