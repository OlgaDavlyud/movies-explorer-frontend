import React from "react";
import './ComponentWithForm.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function ComponentWithForm(props) {
    return(
        <div className="section-with-form">
            <Logo />
            <h2 className="section__title">{props.title}</h2>
            <form className="section__form">
                <div className="input__container">
                    {props.children}
                </div>
                <button
                className="section__button"
                type="submit"
                name="button-submit"
                value={props.buttonText}
                >{props.buttonText}</button>
                <p className="section__question">{props.question}<Link className="section__link" to={ props.path } >{props.textPath}</Link></p>
            </form>
        </div>
    );
}

export default ComponentWithForm