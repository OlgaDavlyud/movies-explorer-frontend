import React, { useContext, useState } from "react";
import './Profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
    const currentUser = useContext(CurrentUserContext);
    const [formValue, setFormValue] = useState({name:'', email:''})

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function activeEditProfile() {
        const inputName = document.getElementById('nameProfile');
        const inputEmail = document.getElementById('emailProfile');
        inputName.disabled = false;
        inputEmail.disabled = false;
        inputName.focus();
    }

    function handleSubmitData(evt){
        evt.preventDefault();
        const { name, email } = formValue;
        props.onUpdateUser(name, email);
        setFormValue({ name:'', email: '' });
    }

    function handleOnSignOut(evt) {
        evt.preventDefault();
        props.onSignOut();
    }

    return(
        <main className="profile">
            <section className="profile__section">
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <form className="profile__form" onUpdateUser={props.onUpdateUser}>
                    <div className="profile__container">
                        <label className="profile__name">
                            <span className="profile__input-title">Имя</span>
                            <input
                                className="profile__input"
                                type="text"
                                name="name"
                                id="nameProfile"
                                placeholder={currentUser.name}
                                value={currentUser.name}
                                minLength={2}
                                maxLength={200}
                                disabled
                                onChange={handleChange}
                            />
                        </label>
                        <label className="profile__email">
                            <span className="profile__input-title">E-mail</span>
                            <input
                                className="profile__input"
                                type="email"
                                name="email"
                                id="emailProfile"
                                placeholder={currentUser.email}
                                value={currentUser.email}
                                minLength={4}
                                maxLength={30}
                                disabled
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button className={props.isEditData ? "profile__button profile__button-edit profile__button-edit-hidden" : "profile__button profile__button-edit"}
                    type="button"
                    onClick={activeEditProfile}
                    onUpdateUser={props.onUpdateUser}
                    >Редактировать</button>
                    <button className={props.isEditData ? "profile__btn-save" : "profile__btn-save profile__btn-save-hidden"}
                    type="submit"
                    disabled
                    onClick={handleSubmitData}
                    >Сохранить</button>
                </form>
                <Link className="profile__button-exit" to="/">
                    <button
                        className={props.isEditData ? "profile__button profile__button-exit profile__button-exit-hidden" : "profile__button profile__button-exit"}
                        type="button"
                        onClick={handleOnSignOut}
                    >
                        Выйти из аккаунта
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default Profile