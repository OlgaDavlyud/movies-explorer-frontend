import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import findIcon from '../../images/find-icon.svg';

function SearchForm() {
    return(
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__form">
                    <img className="search-form__icon" src={findIcon} alt="Иконка лупы"/>
                    <input
                    className="search-form__input"
                    type="text"
                    placeholder="Фильм"
                    required
                    />
                    <button className="search-form__btn" type="submit"></button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    );
}

export default SearchForm