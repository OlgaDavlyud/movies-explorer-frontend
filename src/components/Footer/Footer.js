import React from 'react';
import './Footer.css'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="footer">
            <p className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__text">© {year} </p>
                <nav className="footer__links">
                    <a className="footer__text footer__link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                    <a className="footer__text footer__link" href="https://github.com/OlgaDavlyud" target="blank">Github</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer