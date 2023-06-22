import React from "react";
import './AboutProject.css';

function AboutProject() {
    return(
        <section className="about-project" id="about-project">
            <hi className="section__title">О проекте</hi>
            <article className="about-project__grid-table">
                <h2 className="grid-table__heading">Дипломный проект включал 5 этапов</h2>
                <h2 className="grid-table__heading">На выполнение диплома ушло 5 недель</h2>
                <p className="grid-table__text">Составление плана, работу над бэкендом, вёрстку, добавление
                 функциональности и финальные доработки.</p>
                <p className="grid-table__text"> У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.</p>
            </article>
            <div className="about-project__timeline">
                <div className="about-project__timeline-back">1 неделя</div>
                <div className="about-project__timeline-front">4 недели</div>
                <p className="about-project__timeline-caption">Back-end</p>
                <p className="about-project__timeline-caption">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject