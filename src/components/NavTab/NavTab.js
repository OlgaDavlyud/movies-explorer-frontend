import React from "react";
import './NavTab.css';

function NavTab() {
    return(
        <section className="navtab">
            <nav className="navtab__container">
                <a className="navtab__link" href="#about-project" target="blank" rel="noopener noreferrer">О проекте</a>
                <a className="navtab__link" href="#techs" target="blank" rel="noopener noreferrer">Технологии</a>
                <a className="navtab__link" href="#about-me" target="blank" rel="noopener noreferrer">Студент</a>
            </nav>
        </section>
    );
}

export default NavTab