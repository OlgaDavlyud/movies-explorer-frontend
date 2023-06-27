import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import findIcon from '../../images/find-icon.svg';
import lineSearchForm from '../../images/line-search-form.svg';

function SearchForm() {
    return(
        <div className="section__search-form">
            <div className="search__form-container">
                <fotm className="search__form">
                    <img className="search__icon" src={findIcon} alt="Иконка лупы"/>
                    <input
                    className="search__input"
                    type="text"
                    placeholder="Фильм"
                    >
                    </input>
                    <button className="search__btn" />
                    <img className="search__form-line" src={lineSearchForm} alt="Вертикальный разделитель"  />
                    <FilterCheckbox />
                </fotm>
            </div>
        </div>
    );
}

export default SearchForm