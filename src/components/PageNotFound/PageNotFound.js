import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return(
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            <Link className="not-found__link" to="/">
                <button className="not-found__button" type="button">Назад</button>
            </Link>
        </section>
    );
}

export default PageNotFound