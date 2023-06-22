import React from "react";
import './AboutMe.css';
import myPhoto from "../../images/IMG_9715 (1).jpeg"

function AboutMe() {
    return(
        <section className="about-me" id="about-me">
            <hi className="section__title">Студент</hi>
            <div className="section__container">
                <div className="about-me__info">
                    <h2 className="about-me__title">Ольга</h2>
                    <h3 className="about-me__subtitle">Фронтенд-разработчик, 28 лет</h3>
                    <p className="about-me__description">Я родилась и живу в Москве, закончила факультет экономики МГПУ.
                    У меня есть любимый пес, а еще попугай и черепаха.
                    Я люблю читать книги, увлекаюсь сноубордом, бегом и фигурным катанием. Уже целый год я изучаю код.
                    С 2017 года работю в компании «CompTek». После того, как прошла курс по веб-разработке, начала искать работу по новой специальности.</p>
                    <a className="about-me__link" href="https://github.com/OlgaDavlyud" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <img className="about-me__photo" src={myPhoto} alt="Фотография студента" />
            </div>
        </section>
    );
}

export default AboutMe