import React from "react";
import './Register.css';
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
                    <label className="register__input-field">
                        <span className="register__input-title">Имя</span>
                        <input
                        className="register__input"
                        type="text"
                        name="name"
                        id="profile-name"
                        placeholder="Виталий"
                        required
                        minLength={2}
                        maxLength={40}
                        />
                        <span className="register__error-visible"></span>
                    </label>
                    <label className="register__input-field">
                        <span className="register__input-title">E-mail</span>
                        <input
                        className="register__input"
                        type="email"
                        name="email"
                        id="emailAddress"
                        placeholder="example@example.ru"
                        required
                        minLength={4}
                        maxLength={30}
                        />
                        <span className="register__error-visible"></span>
                    </label>
                    <label className="register__input-field">
                        <span className="register__input-title">Пароль</span>
                        <input
                        className="register__input"
                        type="password"
                        name="password"
                        id="userPassword"
                        placeholder="***********"
                        required
                        minLength={2}
                        maxLength={200}
                        />
                        <span className="register__error-visible">Что-то пошло не так...</span>
                    </label>
                </ComponentWithForm>
            </main>
        );
    }

export default Register