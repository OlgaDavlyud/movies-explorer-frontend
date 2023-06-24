import React from "react";
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile(props) {
    return(
        <div className="profile">
            <h2 className="profile__title">Привет, {props.name}!</h2>
            <div className="profile__container">
                <div className="profile__name">
                    <span>Имя</span>
                    <span>{props.name}</span>
                </div>
                <div className="profile__email">
                    <span>E-mail</span>
                    <span>{props.email}</span>
                </div>
            </div>
            <div className="profile__buttons">
                <button className="profile__button profile__button-edit">Редактировать</button>
                <Link to="/">
                    <button className="profile__button profile__button-exit">Выйти из аккаунта</button>
                </Link>
            </div>
        </div>
    );
}

export default Profile