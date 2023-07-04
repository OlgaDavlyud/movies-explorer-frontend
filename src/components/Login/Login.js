import React from "react";
import ComponentWithForm from '../ComponentWithForm/ComponentWithForm';

function Login() {
    return(
        <main className="login">
            <ComponentWithForm
                title="Рады видеть!"
                buttonText="Войти"
                question="Ещё не зарегистрированы?"
                path="/signup"
                textPath="Регистрация"
            >
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
                    <span className="section-with-form__error-visible"></span>
                </label>
            </ComponentWithForm>
        </main>
    );
}

export default Login