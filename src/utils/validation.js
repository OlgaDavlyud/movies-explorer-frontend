import { useEffect, useState } from "react";

export function useInputValidation(initialInputValue, validations) {
  const [inputValue, setInputValues] = useState(initialInputValue);
  const [isDirty, setIsDirty] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isEmpty || emailError || minLengthError) {
        setIsValid(false);
    } else {
        setIsValid(true);
    }
}, [isEmpty, emailError, minLengthError])

useEffect(() => {
    let message = '';
    for (const validation in validations) {
        // eslint-disable-next-line default-case
        switch (validation) {
            case "minLength":
                if (inputValue && inputValue.length < validations[validation]) {
                    message = `Длина поля не должна быть меньше ${validations[validation]} символов`;
                    setMinLengthError(true);
                } else {
                    setMinLengthError(false);
                }
                break;
            case "isEmpty":
                if (!inputValue) {
                    setIsEmpty(true);
                    message = `Поле обязательно для заполнения`;
                } else {
                    setIsEmpty(false);
                }
                break;
            case "isEmail":
                const isValidEmail = String(inputValue)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                if (inputValue && !isValidEmail) {
                    message = `Введите корректный e-mail`;
                    setEmailError(true);
                } else {
                    setEmailError(false);
                }
                break;
        }
    }
    setValidationMessage(message);
}, [inputValue])

function handleInputChange(evt) {
    handleInputBlur(evt);
    setInputValues(evt.target.value);
}

function handleInputBlur() {
    setIsDirty(true);
}

return {
    inputValue,
    handleInputChange,
    handleInputBlur,
    isDirty,
    isEmpty,
    emailError,
    minLengthError,
    validationMessage,
    isValid,
}
}