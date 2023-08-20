import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ onChange, value, onClick }) {
    return(
        <div className="filter-checkbox">
            <div className="checkbox-container">
                <label className="checkbox">
                    <input type="checkbox"
                        checked={value}
                        onChange={(e) => {
                            onChange (e.target.checked);
                        }}
                    />
                    <span className="checkbox-switch" onClick={onClick}></span>
                </label>
                <p className="filter-checkbox__text">Короткометражки</p>
            </div>
        </div>
    );
}

export default FilterCheckbox