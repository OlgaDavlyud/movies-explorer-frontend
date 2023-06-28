import React from "react";
import { useLocation } from "react-router-dom";
import './MoreBtn.css'

function MoreBtn() {
  let { pathname } = useLocation();

    return(
        <div className={ pathname === "/movies" ? "more__section" : "more__section-hidden"}>
            <button className="more__btn" type="submit">
                <p className="btn__text">Ещё</p>
            </button>
        </div>
    );
}

export default MoreBtn