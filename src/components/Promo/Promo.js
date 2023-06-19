import React from "react";
import './Promo.css'
import landingLogo from '../../images/landing-logo.svg'

function Promo() {
    return(
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="promo__logo" src={landingLogo} alt="Логотип Я.Практикум" />
            </div>
        </section>
    );
}

export default Promo