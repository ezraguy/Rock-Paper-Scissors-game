import React from 'react'
import simpleRulesImg from '../images/image-rules.svg';
import proRulesImg from '../images/image-rules-bonus.svg';
import '../scss/rules.scss';
import { ReactComponent as XSvg } from '../images/x.svg';
const Rules = ({ showModal, proMode }) => {

    return (
        <div className="rules-modal">
            <div className="top-modal">
                <p className="modal-title">rules</p>
                <button className="close-btn" >
                    <XSvg onClick={showModal} />
                </button>
            </div>
            {proMode &&
                <img src={proRulesImg} className="rules-image" alt="rules" />
            }
            {!proMode && <img src={simpleRulesImg} className="rules-image" alt="rules" />}
        </div>);
}

export default Rules;