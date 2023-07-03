import React from "react";
import './Portfolio.css';

function Portfolio() {
    return(
        <section className="portfolio">
            <h2 className="portfolio-section__title">Портфолио</h2>
            <ul className="portfolio__container">
                <li className="portfolio__item">
                    <p className="portfolio__title">Статичный сайт</p>
                    <a className="portfolio__link" href="https://github.com/OlgaDavlyud/how-to-learn" target="blank" rel="noopener noreferrer">↗</a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__title">Адаптивный сайт</p>
                    <a className="portfolio__link" href="https://github.com/OlgaDavlyud/russian-travel" target="blank" rel="noopener noreferrer">↗</a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__title">Одностраничное приложение</p>
                    <a className="portfolio__link" href="https://github.com/OlgaDavlyud/mesto" target="blank" rel="noopener noreferrer">↗</a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio