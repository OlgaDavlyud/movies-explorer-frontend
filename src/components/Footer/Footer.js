import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    let { pathname } = useLocation();
    const isRoot = pathname === '/'
    const visible = isRoot || pathname === '/movies' || pathname === '/saved-movies';

    return(
        <>
        { visible && (
                <footer className="footer">
                    <p className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__container">
                        <p className="footer__text footer__date">© {year} </p>
                        <ul className="footer__links">
                            <li>
                                <a className="footer__text footer__link" href="https://practicum.yandex.ru/" target="blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                            </li>
                            <li>
                                <a className="footer__text footer__link" href="https://github.com/OlgaDavlyud" target="blank" rel="noopener noreferrer">Github</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            )}
        </>
    );
}

export default Footer