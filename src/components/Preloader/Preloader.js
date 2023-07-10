import React from 'react'
import './Preloader.css'

const Preloader = ({ hidden }) => {
    return (
        <div className={hidden ? "preloader-hidden" : "preloader"}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
