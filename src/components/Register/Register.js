// import React, { useState } from "react";
import './Register.css';
import ComponentWithForm from "../ComponentWithForm/ComponentWithForm";
import { useInputValidation } from '../../utils/validation';

function Register(props) {
    const name = useInputValidation('', { isEmpty: true, minLength: 2 });
    const email = useInputValidation('', { isEmpty: true, minLength: 4, isEmail: false });
    const password = useInputValidation('', { isEmpty: true, minLength: 2, });
    // const [formValue, setFormValue] = useState({name:'', email:'', password:''})

    // const handleChange = (e) => {
    //     const {name, value} = e.target;

    //     setFormValue({
    //         ...formValue,
    //         [name]: value
    //     });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const { name, email, password } = formValue;
        props.onRegister({name: name.inputValue, email: email.inputValue, password: password.inputValue});
        console.log(name, email, password);
        // setFormValue({ name:'', email: '', password: '' });
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
                isSubmitBtnDisabled={!email.isValid || !password.isValid}
                >
                    <label className="register__input-field">
                        <span className="register__input-title">Имя</span>
                        <input
                        className="register__input"
                        type="text"
                        name="name"
                        id="profileName"
                        placeholder="Ваше имя"
                        required
                        minLength={2}
                        maxLength={40}
                        value={name.inputValue}
                        onChange={name.handleInputChange}
                        onBlur={name.handleInputBlur}
                        />
                        {(name.isDirty && name.validationMessage) && <span className="register__error-visible">{name.validationMessage}</span>}
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
                        value={email.inputValue}
                        onChange={email.handleInputChange}
                        onBlur={email.handleInputBlur}
                        />
                        {(email.isDirty && email.validationMessage) && <span className="register__error-visible">{email.validationMessage}</span>}
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
                        value={password.inputValue}
                        onChange={password.handleInputChange}
                        // validationMessage={password.validationMessage}
                        // isDirty={password.isDirty}
                        onBlur={password.handleInputBlur}
                        />
                        {(password.isDirty && password.validationMessage) && <span className="register__error-visible">{password.validationMessage}</span>}
                    </label>
                </ComponentWithForm>
            </main>
        );
    }

export default Register