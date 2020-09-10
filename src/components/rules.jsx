import React from 'react'
import rulesImg from '../images/image-rules.svg';
import '../scss/rules.scss';
import { ReactComponent as XSvg } from '../images/x.svg';
const Rules = ({ showModal }) => {

    return (
        <div className="rules-modal">
            <div className="top-modal">
                <p className="modal-title">rules</p>
                <button className="close-btn" >
                    <XSvg onClick={showModal} />
                </button>
            </div>

            <img src={rulesImg} className="rules-image" alt="rules" />
        </div>);
}

export default Rules;