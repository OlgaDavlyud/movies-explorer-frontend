import React, { useState } from "react";
import './Register.css';
import ComponentWithForm from "../ComponentWithForm/ComponentWithForm";

function Register({onRegister}) {
    const [formValue, setFormValue] = useState({name:'', email:'', password:''})

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = formValue;
        onRegister(name, email, password);
        setFormValue({ name:'', email: '', password: '' });
    }

        return(
            <main className="register">
                <ComponentWithForm
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                question="Уже зарегистрированы?"
                path="/signin"
                textPath="Войти"
                onSubmit={handleSubmit}
                >
                    <label className="register__input-field">
                        <span className="register__input-title">Имя</span>
                        <input
                        className="register__input"
                        type="text"
                        name="name"
                        id="profileName"
                        placeholder="Виталий"
                        required
                        minLength={2}
                        maxLength={40}
                        value={formValue.name}
                        onChange={handleChange}
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
                        value={formValue.email}
                        onChange={handleChange}
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
                        value={formValue.password}
                        onChange={handleChange}
                        />
                        <span className="register__error-visible"></span>
                    </label>
                </ComponentWithForm>
            </main>
        );
    }

export default Register