import React from "react";
import './MoreBtn.css'

function MoreBtn() {
    return(
        <div className="more more__section">
            <button className="more__btn" type="submit">
                <p className="btn__text">Ещё</p>
            </button>
        </div>
    );
}

export default MoreBtn