import React, { useState, useEffect } from 'react'
import './E.css'

import { Button, Modal } from '../../layout'

export default function E(props) {
    const [open, openEnvelope] = useState(false);
    const [card, showCard] = useState(false);
    const [envelope, showEnvelope] = useState(false);

    const manageTransition = () => {
        if (!open) {
            openEnvelope(true);
            setTimeout(() => showCard(true), 800);
        } else {
            showCard(false)
            setTimeout(() => openEnvelope(false), 500);
        }
    }

    useEffect(() => {
        setTimeout(() => showEnvelope(true), 300);
    }, [])

    return (
        <div className="module">
            <div className="back-module">
                <Button onClick={() => props.changePage("dashboard")}>
                    <i className="material-icons">keyboard_arrow_left</i>
                    Dash
                </Button>
                <p style={{fontWeight: "normal"}}>I LOV<strong style={{color: "#e3b662"}}>E</strong> U</p>
            </div>
            <div id="desc">
                <p> This last module might not have a lot of visuals, its just a love letter. From me to you
                    I wanted to just be real for a sec and tell you all that I feel. I love you Steph.
                </p>
            </div>
            <div id="e-letter">
                <div id="envelope" style={{opacity: envelope ? 1 : 0}} onClick={() => {
                    manageTransition();
                }}>
                    <div id="cover" style={{transform: open ? "rotateX(180deg)" : "rotateX(0deg)"}}></div>
                    <div id="card" style={{transform: card ? "translateY(-80px)" : "translateY(0)"}}>
                        <p>Dear Steph...</p>
                        <p> This is placeholder text that means absolutely nothing. If you wanna read it 
                            that's on you. There is absolutely nothing going on with this text. I just 
                            hope you know that and don't try reading this.
                        </p>
                    </div>
                </div>
            </div>
            <p id="e-song">E is for everything that I adore...</p>
        </div>
    )
}