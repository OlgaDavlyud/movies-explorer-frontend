import React, { useState } from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import findIcon from '../../images/find-icon.svg';

function SearchForm(props) {
    const [searchValue, setSearchValue] = useState({moviesName: '', isShortMovies: false});
    const [checkboxValue, setCheckboxValue] = React.useState(Boolean (Number (localStorage.getItem("shortFilmActive"))) ?? false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSearchValue({
            ...searchValue,
            [name]: value
        });
    }

    const onChange = (v) => {
        setCheckboxValue (v);
        localStorage.setItem("shortFilmActive", Number(v));
    };

    const handleSubmitSearchData = (e) => {
        e.preventDefault();
        props.handleSubmit(searchValue.moviesName, searchValue.isShortMovies);
    }

    const handleClickShortMovies = () =>{
        if(!searchValue.isShortMovies) {
            setSearchValue((preview) => ({...preview, isShortMovies: true}))
            props.handleSubmit(searchValue.moviesName, true)
        } else {
            setSearchValue((preview) => ({...preview, isShortMovies: false}))
            props.handleSubmit(searchValue.moviesName, false)
        }
    }

    return(
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__form" onSubmit={handleSubmitSearchData}>
                    <img className="search-form__icon" src={findIcon} alt="Иконка лупы"/>
                    <input
                    className="search-form__input"
                    type="text"
                    name="moviesName"
                    placeholder="Фильм"
                    required
                    onChange={handleChange}
                    />
                    <button className="search-form__btn" type="submit" value="Поиск" onSubmit={handleSubmitSearchData}></button>
                </form>
                <FilterCheckbox
                onClick={handleClickShortMovies}
                onChange={onChange} value={checkboxValue}
                />
            </div>
        </section>
    );
}

export default SearchForm