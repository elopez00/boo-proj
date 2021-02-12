import React, {useState, useEffect} from 'react'
import './Modal.css'

export default function Modal(props) {
    // state
    const [modal, showModal] = useState(false); 
    const [transition, showTransition] = useState(false);

    const manageTransition = () => {
        if (!modal) {
            showModal(true);
            setTimeout(() => showTransition(true), 200);
        } else {
            showTransition(false);
            setTimeout(() => showModal(false), 300);
        }
    }

    useEffect(() => {
        props.modal !== modal && manageTransition();
    }) 

    return (
        <div className="modal" style={{opacity: transition ? 1 : 0, display: modal ? "flex" : "none"}}>
            <div className={props.fullscreen ? 'full-screen-modal' : props.paper ? 'paper-modal' : 'modal-popup'}>
                <div id="back-button">
                    <i className="material-icons" onClick={() => props.showModal(false)}>close</i>
                </div>
                { props.children }
            </div>
        </div>
    )
} 