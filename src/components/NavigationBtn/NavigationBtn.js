import React from "react";
import './NavigationBtn.css';
import profileIcon from "../../images/profile-icon.svg";

function NavigationBtn() {
    return(
        <button className="profile-btn" type="button">
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