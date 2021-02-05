import React, { useState } from 'react'
import './CardOpen.css'

import { Button } from '../../layout'

export default function CardOpen(props) {
    // state
    const [open, openCard] = useState(false);
    const [showTransition, toggleTransition] = useState(false);

    const onClick = () => {
        openCard(true);
        setTimeout(() => toggleTransition(true), 1200);
    }

    return (
        <div className="card-open" style={{display: showTransition ? "none" : "flex" }}>
            <div id="card-slice" style={{width: open ? "0%" : "50"}}>
                <div id="s1"></div>
            </div>
            <div id="card-slice" style={{width: open ? "0%" : "50"}}>
                <div id="s2"></div>
            </div>
            <div id="card-open-button" style={{opacity: open ? 0 : 1}}>
                <Button variant="bright" onClick={onClick}>Open me</Button>
            </div>
        </div>
    )
}