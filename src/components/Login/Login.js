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
                <label className="input__field">
                    <p className="input__title">E-mail</p>
                    <input
                    className="section__input"
                    type="email"
                    name="email"
                    id="emailAddress"
                    placeholder="example@example.ru"
                    required=""
                    minLength={4}
                    maxLength={30}
                    />
                    <span className="section__error-visible" />
                </label>
                <label className="input__field">
                    <p className="input__title">Пароль</p>
                    <input
                    className="section__input"
                    type="password"
                    name="password"
                    id="userPassword"
                    placeholder="***********"
                    required=""
                    minLength={2}
                    maxLength={200}
                    />
                    <span className="section__error-visible"></span>
                </label>
            </ComponentWithForm>
        </main>
    );
}

export default Login