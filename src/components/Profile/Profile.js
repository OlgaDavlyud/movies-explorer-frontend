import React from "react";
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile(props) {

    function editProfile() {
        const inputName = document.getElementById('nameProfile');
        const inputEmail = document.getElementById('emailProfile');
        inputName.disabled = false;
        inputEmail.disabled = false;
        inputName.focus();
    }

    return(
        <main className="profile">
            <section className="profile__section">
                <h1 className="profile__title">Привет, {props.name}!</h1>
                <form className="profile__form">
                    <div className="profile__container">
                        <label className="profile__name">
                            <span className="profile__input-title">Имя</span>
                            <input
                                className="profile__input"
                                type="text"
                                name="name"
                                id="nameProfile"
                                placeholder={props.name}
                                value={props.name}
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
                                placeholder={props.email}
                                value={props.email}
                                minLength={4}
                                maxLength={30}
                                disabled
                            />
                        </label>
                    </div>
                    <button className="profile__button profile__button-edit" type="button" onClick={editProfile}>Редактировать</button>
                    <button className="profile__btn-save profile__btn-save-hidden" type="button">Сохранить</button>
                </form>
                <Link className="profile__button-exit" to="/">
                    <button className="profile__button profile__button-exit" type="button">Выйти из аккаунта</button>
                </Link>
            </section>
        </main>
    );
}

export default Profile