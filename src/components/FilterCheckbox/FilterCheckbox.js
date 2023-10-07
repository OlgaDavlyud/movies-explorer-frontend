import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return(
        <div className="filter-checkbox">
            <div className="checkbox-container">
                <label className="checkbox">
                    <input type="checkbox"
                        defaultChecked={props.isActive}
                    />
                    <span className="checkbox-switch" onClick={props.onClick}></span>
                </label>
                <p className="filter-checkbox__text">Короткометражки</p>
            </div>
        </div>
    );
}

export default FilterCheckbox