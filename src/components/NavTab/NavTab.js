import React from "react";
import './NavTab.css';

function NavTab() {
    return(
        <section className="navtab">
            <nav className="navtav__section">
                <ul className="navtab__container">
                    <li>
                        <a className="navtab__link" href="#about-project">О проекте</a>
                    </li>
                    <li>
                        <a className="navtab__link" href="#techs">Технологии</a>
                    </li>
                    <li>
                        <a className="navtab__link" href="#about-me">Студент</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default NavTab