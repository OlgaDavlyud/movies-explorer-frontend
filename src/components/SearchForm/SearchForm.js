import React, { useState } from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import findIcon from '../../images/find-icon.svg';

function SearchForm(props) {
    const [searchValue, setSearchValue] = useState({moviesName: '', isShortMovies: false});

    const handleChange = (e) => {
        const {name, value} = e.target;

        setSearchValue({
            ...searchValue,
            [name]: value
        });
    }

    const handleSubmitSearchData = (e) => {
        e.preventDefault();
        props.handleSubmit(searchValue.moviesName, searchValue.isShortMovies);
    }

    const handleClickShortMovies = (e) =>{
        e.preventDefault();
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
                <FilterCheckbox isActiveFilterBtn={searchValue.isShortMovies} onClick={handleClickShortMovies}/>
            </div>
        </section>
    );
}

export default SearchForm