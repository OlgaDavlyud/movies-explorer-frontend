import React, { useContext } from "react";
import './Profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useInputValidation } from "../../utils/validation";

function Profile(props) {
    const currentUser = useContext(CurrentUserContext);
    const name = useInputValidation(currentUser.name, { isEmpty: true, minLength: 2 });
    const email = useInputValidation(currentUser.email, { isEmpty: true, minLength: 4, isEmail: false });
    const saveBtnClassNameVisible = `profile__btn-save profile__btn-save${props.isEditData ? "" : "-hidden" }`

    function activeEditProfile() {
        const inputName = document.getElementById('nameProfile');
        inputName.disabled = false;
        inputName.focus();
        props.setIsEditData(true);
    }

    function handleSubmitData(evt){
        evt.preventDefault();
        props.setIsEditData(false);
        props.onUpdateUser({name: name.inputValue, email: email.inputValue});
    }

    function handleOnSignOut(evt) {
        evt.preventDefault();
        props.onSignOut();
    }

    return(
        <main className="profile">
            <section className="profile__section">
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <form className="profile__form" onSubmit={handleSubmitData}>
                    <div className="profile__container">
                        <label className="profile__name">
                            <span className="profile__input-title">Имя</span>
                            <div className="profile__input-container">
                                <input
                                    className="profile__input"
                                    type="text"
                                    name="name"
                                    id="nameProfile"
                                    placeholder={currentUser.name}
                                    value={name.inputValue}
                                    minLength={2}
                                    maxLength={200}
                                    disabled={!props.isEditData}
                                    onChange={name.handleInputChange}
                                    onBlur={name.handleInputBlur}
                                />
                                {(name.isDirty && name.validationMessage) && <span className="profile__error-visible">{name.validationMessage}</span>}
                            </div>
                        </label>
                        <label className="profile__email">
                            <span className="profile__input-title">E-mail</span>
                            <div className="profile__input-container">
                                <input
                                    className="profile__input"
                                    type="email"
                                    name="email"
                                    id="emailProfile"
                                    placeholder={currentUser.email}
                                    value={email.inputValue}
                                    minLength={4}
                                    maxLength={30}
                                    disabled={!props.isEditData}
                                    onChange={email.handleInputChange}
                                    onBlur={email.handleInputBlur}
                                />
                                {(email.isDirty && email.validationMessage) && <span className="profile__error-visible">{email.validationMessage}</span>}
                            </div>
                        </label>
                    </div>
                    <button className={props.isEditData ? "profile__button profile__button-edit profile__button-edit-hidden" : "profile__button profile__button-edit"}
                    type="button"
                    onClick={activeEditProfile}
                    >Редактировать</button>
                    <button
                    className={!name.isValid || !email.isValid || (props.isEditData && name.inputValue === currentUser.name && email.inputValue === currentUser.email) ? "profile__btn-save profile__btn-save-disabled" : saveBtnClassNameVisible}
                    type="submit"
                    disabled={!name.isValid || !email.isValid || (props.isEditData && name.inputValue === currentUser.name && email.inputValue === currentUser.email)}
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