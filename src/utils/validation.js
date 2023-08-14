import React, { useCallback } from "./react";

//хук управления формой
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues};
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}

// // Можно универсально создать экземпляры валидаторов всех форм
// // поместив их все в один объект, а потом брать из него валидатор по атрибуту name, который задан для формы. Это очень универсально и для любого кол-ва форм подходит.

// const formValidators = {}

// // Включение валидации
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll
// (config.formSelector))
//   formList.forEach((formElement) => {
// const validator = new FormValidator(formElement, config)
// // получаем данные из атрибута `name` у формы
// const formName = formElement.getAttribute('name')

// // вот тут в объект записываем под именем формы
//     formValidators[formName] = validator;
//     validator.enableValidation();
//   });
// };

// enableValidation(config);

// // И теперь можно использовать валидаторы для деактивации кнопки и тд
// formValidators[ profileForm.getAttribute('name') ].resetValidation()

// // или можно использовать строку (ведь Вы знаете, какой атрибут `name` у каждой формы)
// formValidators['profile-form'].resetValidation()