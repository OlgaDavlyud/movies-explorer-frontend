import React from "react";
import './NavigationBtn.css';
import profileIcon from "../../images/profile-icon.svg";
import { useLocation } from "react-router-dom";

function NavigationBtn() {
    let { pathname } = useLocation();

    const isRoot = pathname === '/'

    return(
        <button className={isRoot ? "profile-btn profile-btn-landing" : "profile-btn"} type="button">
            <span className="profile-btn__text">Аккаунт</span>
            <div className="profile-btn__img-background">
                <img
                    className="profile-btn__img"
                    src={profileIcon}
                    alt="Иконка профиля"
                />
            </div>
        </button>
    )
}

export default NavigationBtn