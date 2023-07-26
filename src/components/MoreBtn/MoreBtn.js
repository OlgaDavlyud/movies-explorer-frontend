import React from "react";
import './MoreBtn.css'

function MoreBtn(props) {

    return(
        <div className="more">
            <button className="more__btn" type="button" onClick={props.onClick}>
                <span className="more__btn-text">Ещё</span>
            </button>
        </div>
    );
}

export default MoreBtn