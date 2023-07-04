import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {

    return(
        <div className="section__filte-checkbox">
            <div className="checkbox-container">
                <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox-switch"></span>
                </label>
                <p className="checkbox__text">Короткометражки</p>
            </div>
        </div>
    );
}

export default FilterCheckbox