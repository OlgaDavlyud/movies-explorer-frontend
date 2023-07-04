import React from "react";
import './ComponentWithForm.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';

function ComponentWithForm(props) {
    let { pathname } = useLocation();

    return(
        <section className="section-with-form">
            <Logo />
            <h1 className="section-with-form__title">{props.title}</h1>
            <form className="section-with-form__form">
                <div className="section-with-form__input-container">
                    {props.children}
                </div>
                <button
                className={ pathname !== "/signup" ? "section-with-form__btn section-with-form__btn-signin" : "section-with-form__btn section-with-form__btn-signup" }
                type="submit"
                name="button-submit"
                value={props.buttonText}
                >{props.buttonText}</button>
                <p className="section-with-form__question">{props.question}<Link className="section-with-form__link" to={ props.path } >{props.textPath}</Link></p>
            </form>
        </section>
    );
}

export default ComponentWithForm