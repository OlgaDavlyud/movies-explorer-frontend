import React, { useState } from "react";
import './Login.css';
import ComponentWithForm from '../ComponentWithForm/ComponentWithForm';

function Login({onLogin}) {
    const [formValue, setFormValue] = useState({email: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email , password } = formValue;
        if (!email || !password){
            return;
        }
        onLogin(email, password);
        setFormValue({ email: '', password: ''});
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
                    onChange={handleChange}
                    />
                    <span className="login__error-visible"></span>
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
                    onChange={handleChange}
                    />
                    <span className="login__error-visible"></span>
                </label>
            </ComponentWithForm>
        </main>
    );
}

export default Login