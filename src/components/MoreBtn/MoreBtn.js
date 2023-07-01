import React from "react";
import { useLocation } from "react-router-dom";
import './MoreBtn.css'

function MoreBtn({ hidden, onClick }) {
    let { pathname } = useLocation();

    return(
        <div className={ hidden ? "more__section-hidden" : "more__section"}>
            <button className={ pathname === '/movies' ? "more__btn" : "more__btn-hidden" } type="button" onClick={ onClick }>
                <p className="btn__text">Ещё</p>
            </button>
        </div>
    );
}

export default MoreBtn