import React from "react";
import './InfoTooltip.css';
import done from "../../images/done.svg";

function InfoTooltip(props) {
  return (
    <div className={`popup popup-info-tooltip ${props.isOpen && "popup_opened"}`}>
      <div className={`popup__info-tooltip-container`}>
        <button
          className="popup__info-tooltip-button-close"
          type="reset"
          name="button-close"
          onClick={props.onClose}
        ></button>
        <div className="popup__info-tooltip-form">
          <div className="popup__info-tooltip-image">
            <img src={done} alt="Выполнено" />
          </div>
          <span className="popup__info-tooltip-text">{props.text}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;