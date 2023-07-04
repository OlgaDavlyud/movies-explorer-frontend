import React from "react";
import ComponentWithForm from "../ComponentWithForm/ComponentWithForm";

function Register() {
        return(
            <main className="register">
                <ComponentWithForm
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                question="Уже зарегистрированы?"
                path="/signin"
                textPath="Войти"
                >
                    <label className="section-with-form__input-field">
                        <p className="section-with-form__input-title">Имя</p>
                        <input
                        className="section-with-form__input"
                        type="text"
                        name="name"
                        id="profile-name"
                        placeholder="Иван"
                        required
                        minLength={2}
                        maxLength={40}
                        />
                        <span className="section-with-form__error-visible" />
                    </label>
                    <label className="section-with-form__input-field">
                        <p className="section-with-form__input-title">E-mail</p>
                        <input
                        className="section-with-form__input"
                        type="email"
                        name="email"
                        id="emailAddress"
                        placeholder="example@example.ru"
                        required
                        minLength={4}
                        maxLength={30}
                        />
                        <span className="section-with-form__error-visible" />
                    </label>
                    <label className="section-with-form__input-field">
                        <p className="section-with-form__input-title">Пароль</p>
                        <input
                        className="section-with-form__input"
                        type="password"
                        name="password"
                        id="userPassword"
                        placeholder="***********"
                        required
                        minLength={2}
                        maxLength={200}
                        />
                        <span className="section-with-form__error-visible">Что-то пошло не так...</span>
                    </label>
                </ComponentWithForm>
            </main>
        );
    }

export default Register