import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return(
        <div className="filte-checkbox">
            <div className="checkbox-container">
                <label className="checkbox" onClick={props.onClick}>
                    <input type="checkbox"/>
                    <span className="checkbox-switch"></span>
                </label>
                <p className="filte-checkbox__text">Короткометражки</p>
            </div>
        </div>
    );
}

export default FilterCheckbox