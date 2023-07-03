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
            <form className="section__form">
                <div className="input__container">
                    {props.children}
                </div>
                <button
                className={ pathname !== "/signup" ? "section__btn section__btn-signin" : "section__btn section__btn-signup" }
                type="submit"
                name="button-submit"
                value={props.buttonText}
                >{props.buttonText}</button>
                <p className="section__question">{props.question}<Link className="section__link" to={ props.path } >{props.textPath}</Link></p>
            </form>
        </section>
    );
}

export default ComponentWithForm