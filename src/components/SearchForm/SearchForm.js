import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import findIcon from '../../images/find-icon.svg';

function SearchForm() {
    return(
        <div className="section__search-form">
            <fotm className="search__form">
                <img className="search__icon" src={findIcon} alt="Иконка лупы"/>
                <input
                className="search__input"
                type="text"
                placeholder="Фильм"
                >
                </input>
                <FilterCheckbox />
            </fotm>
        </div>
    );
}

export default SearchForm