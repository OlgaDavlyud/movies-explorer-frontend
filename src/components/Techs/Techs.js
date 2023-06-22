import React from "react";
import './Techs.css';

function Techs() {
    return(
        <section className="technologies" id="techs">
            <hi className="section__title">Технологии</hi>
            <div className="technologies__container">
                <h2 className="technologies__title">7 технологий</h2>
                <p className="technologies__description">На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.</p>
                <ul className="technologies__list">
                    <li className="technologies__item technologies__item-text">HTML</li>
                    <li className="technologies__item technologies__item-text">CSS</li>
                    <li className="technologies__item technologies__item-text">JS</li>
                    <li className="technologies__item technologies__item-text">React</li>
                    <li className="technologies__item technologies__item-text">Git</li>
                    <li className="technologies__item technologies__item-text">Express.js</li>
                    <li className="technologies__item technologies__item-text">mongoDB</li>
                </ul>
            </div>
        </section>
    );
}

export default Techs