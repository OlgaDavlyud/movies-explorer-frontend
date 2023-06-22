import React from "react";
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
    return(
        <section className="portfolio">
            <hi className="section__title">Портфолио</hi>
            <ul className="portfolio__container">
                <li className="portfolio__item">
                    <p className="portfolio__title">Статичный сайт</p>
                    <a className="portfolio__link" href="https://github.com/OlgaDavlyud/how-to-learn" target="blank" rel="noopener noreferrer">
                        <img className="portfolio__link-img" src={arrow} alt="Стрелка для перехода на страницу"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__title">Адаптивный сайт</p>
                    <a className="portfolio__link" href="https://github.com/OlgaDavlyud/russian-travel" target="blank" rel="noopener noreferrer">
                        <img className="portfolio__link-img" src={arrow} alt="Стрелка для перехода на страницу"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__title">Одностраничное приложение</p>
                    <a className="portfolio__link" href="https://github.com/OlgaDavlyud/mesto" target="blank" rel="noopener noreferrer">
                        <img className="portfolio__link-img" src={arrow} alt="Стрелка для перехода на страницу"/>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio