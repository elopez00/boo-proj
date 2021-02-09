import React, {useState} from 'react'
import './L.css'

import { Button } from '../../layout'
import eye from '../../../assets/closed eyes.png'
import zzz from '../../../assets/zzz.png'
import comb from '../../../assets/comb.png'
import spring from '../../../assets/spring.png'
import leg from '../../../assets/leg.png'
import mmm from '../../../assets/mmm.png'
import smile from '../../../assets/smile.png'
import wish from '../../../assets/wish.png'
import sticker from '../../../assets/sticker.png'

import { Modal } from '../../layout'

export default function L(props) {
    const [modal, showModal] = useState(false);
    const [display, displayOther] = useState("eye");
    const [icon, changeIcon] = useState(
        <div style={{height: 100, width: 100}} id="l-icon">
            <img src={eye} height="60%" style={{transform: "translateY(4px)", filter: "invert(1)"}}/>
        </div>
    )

    return (
        <div className="module">
            <div className="back-module">
                <Button>
                    <i className="material-icons">keyboard_arrow_left</i>
                    Dash
                </Button>
                <p style={{fontWeight: "normal"}}>I <strong>L</strong>OVE U</p>
            </div>
            <div id="l-desc">
                <p>You told me to keep track of your mannerisms that I find cute, so I did.
                    Here are 9 things that I love the way you do.
                </p>
            </div>
            <div id="l-icon-container">
                <div id="l-icon-modules">
                    <div id="l-icon" onClick={() => {
                        showModal(true);
                        displayOther("eye");
                        changeIcon(
                            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                                <img src={eye} height="60%" style={{transform: "translateY(4px)", filter: "invert(1)"}}/>
                            </div>
                        )
                    }}>
                        <img src={eye} height="60%" style={{transform: "translateY(4px)", filter: "invert(1)"}}/>
                    </div>
                    <div id="l-icon" onClick={() => {
                        showModal(true);
                        displayOther("zzz");
                        changeIcon(
                            <img src={zzz} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                        )
                    }}>
                        <img src={zzz} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon" onClick={() => {
                        showModal(true);
                        displayOther("comb");
                        changeIcon(
                            <img src={comb} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                        )
                    }}>
                        <img src={comb} height="60%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon">
                        <img src={spring} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon">
                        <img src={leg} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon">
                        <img src={mmm} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon">
                        <img src={sticker} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon">
                        <img src={smile} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon">
                        <img src={wish} height="60%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                </div>
            </div>
            <p id="l-song">L is for the way you look at me...</p>
            <Modal modal={modal} showModal={showModal}>
                <div id="l-modal">
                    { icon }
                    <h2>{mannerisms[display].title}</h2>
                    <p>{mannerisms[display].desc}</p>
                </div>
            </Modal>
        </div>
    )
}

const mannerisms = {
    eye: {
        title: "Close your eyes",
        desc: "I love the way you close your eyes and smile when I kiss you on the cheek :)"
    }
}
