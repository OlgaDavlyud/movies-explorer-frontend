import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import findIcon from '../../images/find-icon.svg';

function SearchForm() {
    return(
        <section className="section__search-form">
            <div className="search__form-container">
                <form className="search__form">
                    <img className="search__icon" src={findIcon} alt="Иконка лупы"/>
                    <input
                    className="search__input"
                    type="text"
                    placeholder="Фильм"
                    >
                    </input>
                    <button className="search__btn" />
                </form>
                <FilterCheckbox />
            </div>
        </section>
    );
}

export default SearchForm