// import React, { useState } from "react";
import './Login.css';
import ComponentWithForm from '../ComponentWithForm/ComponentWithForm';
import { useInputValidation } from '../../utils/validation';

function Login(props) {
    const email = useInputValidation('', { isEmpty: true, minLength: 4, isEmail: false });
    const password = useInputValidation('', { isEmpty: true, minLength: 2, });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.inputValue || !password.inputValue){
            return;
        }
        props.onLogin({email: email.inputValue, password: password.inputValue});
    }

    return(
        <main className="login">
            <ComponentWithForm
                title="Рады видеть!"
                buttonText="Войти"
                question="Ещё не зарегистрированы?"
                path="/signup"
                textPath="Регистрация"
                onSubmit={handleSubmit}
                isSubmitBtnDisabled={!email.isValid || !password.isValid}
            >
                <label className="login__input-field">
                    <span className="login__input-title">E-mail</span>
                    <input
                    className="login__input"
                    type="email"
                    name="email"
                    id="emailAddress"
                    placeholder="example@example.ru"
                    required
                    minLength={4}
                    maxLength={30}
                    onChange={email.handleInputChange}
                    value={email.inputValue}
                    onBlur={email.handleInputBlur}
                    />
                    {(email.isDirty && email.validationMessage) && <span className="login__error-visible">{email.validationMessage}</span>}
                </label>
                <label className="login__input-field">
                    <span className="login__input-title">Пароль</span>
                    <input
                    className="login__input"
                    type="password"
                    name="password"
                    id="userPassword"
                    placeholder="***********"
                    required
                    minLength={2}
                    maxLength={200}
                    onChange={password.handleInputChange}
                    value={password.inputValue}
                    onBlur={password.handleInputBlur}
                    />
                    {(password.isDirty && password.validationMessage) && <span className="login__error-visible">{password.validationMessage}</span>}
                </label>
            </ComponentWithForm>
        </main>
    );
}

export default Login