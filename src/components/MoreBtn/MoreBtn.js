import React from "react";
import { useLocation } from "react-router-dom";
import './MoreBtn.css'

function MoreBtn({ hidden, onClick }) {
    let { pathname } = useLocation();

    return(
        <div className={ hidden ? "more-hidden" : "more"}>
            <button className={ pathname === '/movies' ? "more__btn" : "more__btn-hidden" } type="button" onClick={ onClick }>
                <p className="more__btn-text">Ещё</p>
            </button>
        </div>
    );
}

export default MoreBtn