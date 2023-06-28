import React from "react";
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile(props) {

    return(
        <div className="profile">
            <h2 className="profile__title">Привет, {props.name}!</h2>
            <div className="profile__container">
                <label className="profile__name">
                    <span className="profile__input-title">Имя</span>
                    <input
                        className="profile__input"
                        type="text"
                        name="name"
                        id="nameProfile"
                        value="Ольга"
                        minLength={2}
                        maxLength={200}
                        disabled
                    />
                </label>
                <label className="profile__email">
                    <span className="profile__input-title">E-mail</span>
                    <input
                        className="profile__input"
                        type="email"
                        name="email"
                        id="emailProfile"
                        value="student@ya.ru"
                        minLength={4}
                        maxLength={30}
                        disabled
                    />
                </label>
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