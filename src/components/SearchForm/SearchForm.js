import React, { useEffect, useState } from "react";
import './SearchForm.css';
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import findIcon from '../../images/find-icon.svg';

function SearchForm(props) {
    const { pathname } = useLocation();
    const [searchValue, setSearchValue] = useState(pathname === '/movies' ? JSON.parse(localStorage.getItem('search-value')) ?? {moviesName: '', isShortMovies: false} : {moviesName: '', isShortMovies: false});

    useEffect(() => {
        setSearchValue(pathname === '/movies' ? JSON.parse(localStorage.getItem('search-value')) ?? {moviesName: '', isShortMovies: false} : {moviesName: '', isShortMovies: false})
    }, [pathname])

    useEffect(() => {
        if (pathname === '/movies') {
            localStorage.setItem("search-value", JSON.stringify(searchValue))
        }
    }, [searchValue, pathname])

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
                    value={searchValue.moviesName}
                    onChange={handleChange}
                    />
                    <button className="search-form__btn" type="submit" value="Поиск" onSubmit={handleSubmitSearchData}></button>
                </form>
                <FilterCheckbox
                onClick={handleClickShortMovies}
                isActive={searchValue.isShortMovies}
                />
            </div>
        </section>
    );
}

export default SearchForm