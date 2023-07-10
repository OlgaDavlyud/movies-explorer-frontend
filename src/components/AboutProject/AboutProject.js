import React from "react";
import './AboutProject.css';

function AboutProject() {
    return(
        <section className="about-project" id="about-project">
            <h2 className="about-project__section-title">О проекте</h2>
            <article className="about-project-grid-table">
                <div>
                    <h3 className="about-project-grid-table__heading">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project-grid-table__text">Составление плана, работу над бэкендом, вёрстку, добавление
                 функциональности и финальные доработки.</p>
                </div>
                <div>
                    <h3 className="about-project-grid-table__heading">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project-grid-table__text"> У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                    соблюдать, чтобы успешно защититься.</p>
                </div>
            </article>
            <div className="about-project__timeline">
                <span className="about-project__timeline-back">1 неделя</span>
                <span className="about-project__timeline-front">4 недели</span>
                <p className="about-project__timeline-caption">Back-end</p>
                <p className="about-project__timeline-caption">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject