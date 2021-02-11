import React, {useState, useEffect} from 'react'
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
    // state
    const [modal, showModal] = useState(false);
    const [display, displayOther] = useState("eye");
    const [icon, changeIcon] = useState(
        <div style={{height: 100, width: 100}} id="l-icon">
            <img src={eye} alt="3" height="60%" style={{transform: "translateY(4px)", filter: "invert(1)"}}/>
        </div>
    )

    // modules
    const [module1, showModule1] = useState(false);
    const [module2, showModule2] = useState(false);
    const [module3, showModule3] = useState(false);
    const [module4, showModule4] = useState(false);
    const [module5, showModule5] = useState(false);
    const [module6, showModule6] = useState(false);
    const [module7, showModule7] = useState(false);
    const [module8, showModule8] = useState(false);
    const [module9, showModule9] = useState(false);

    useEffect(() => {
        setTimeout(() => showModule1(true), 300);
        setTimeout(() => showModule2(true), 500);
        setTimeout(() => showModule3(true), 700);
        setTimeout(() => showModule4(true), 500);
        setTimeout(() => showModule5(true), 700);
        setTimeout(() => showModule6(true), 900);
        setTimeout(() => showModule7(true), 700);
        setTimeout(() => showModule8(true), 900);
        setTimeout(() => showModule9(true), 1100);
    }, [])

    /**
     * 
     * @param {String} type type of value you want to return 
     */
    const onClick = type => {
        showModal(true);
        displayOther(type);
        changeIcon(mannerisms[type].icon)
    }

    return (
        <div className="module">
            <div className="back-module">
                <Button onClick={() => props.changePage("dashboard")}>
                    <i className="material-icons">keyboard_arrow_left</i>
                    Dash
                </Button>
                <p style={{fontWeight: "normal"}}>I <strong style={{color: "#ff5858"}}>L</strong>OVE U</p>
            </div>
            <div id="desc">
                <p>You told me to keep track of your mannerisms that I find cute, so I did.
                    Here are 9 things that I love the way you do.
                </p>
            </div>
            <div id="l-icon-container">
                <div id="l-icon-modules">
                    <div id="l-icon" onClick={() => onClick("eye")} style={{opacity: module1 ? 1 : 0}}>
                        <img alt="y" src={eye} height="60%" style={{transform: "translateY(4px)", filter: "invert(1)"}}/>
                    </div>
                    <div id="l-icon" style={{opacity: module2 ? 1 : 0}} onClick={() => onClick("zzz")}>
                        <img alt="y" src={zzz} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon" style={{opacity: module3 ? 1 : 0}} onClick={() => onClick("comb")}>
                        <img alt="y" src={comb} height="60%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon" style={{opacity: module4 ? 1 : 0}} onClick={() => onClick("spring")}>
                        <img alt="y" src={spring} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon" style={{opacity: module5 ? 1 : 0}} onClick={() => onClick("leg")}>
                        <img alt="y" src={leg} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon" style={{opacity: module6 ? 1 : 0}} onClick={() => onClick("mmm")}>
                        <img alt="y" src={mmm} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon" style={{opacity: module7 ? 1 : 0}} onClick={() => onClick("sticker")}>
                        <img alt="y" src={sticker} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon" style={{opacity: module8 ? 1 : 0}} onClick={() => onClick("smile")}>
                        <img alt="y" src={smile} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                    <div id="l-icon" style={{opacity: module9 ? 1 : 0}} onClick={() => onClick("wish")}>
                        <img alt="y" src={wish} height="60%" style={{filter: "brightness(0) invert(1)"}}/>
                    </div>
                </div>
            </div>
            <p id="l-song">L is for the way you look at me...</p>
            <Modal modal={modal} showModal={showModal}>
                <div id="l-modal">
                    { icon }
                    <h2 style={{textAlign: "center"}}>{mannerisms[display].title}</h2>
                    <p>{mannerisms[display].desc}</p>
                </div>
            </Modal>
        </div>
    )
}

const mannerisms = {
    eye: {
        title: "Close your eyes",
        desc: "I love the way you close your eyes and smile when I kiss you on the cheek :)",
        icon: (
            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                <img alt="y" src={eye} height="60%" style={{transform: "translateY(4px)", filter: "invert(1)"}}/>
            </div> 
        )
    },
    zzz: {
        title: "Half asleep",
        desc: "I love the way you turn around when you are half asleep to kiss me good morning",
        icon: (
            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                <img alt="y" src={zzz} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
            </div>
        )
    },
    comb: {
        title: "Play with my hair",
        desc: "I love the way you play with my hair when we're cuddiling <3",
        icon: (
            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                <img alt="y" src={comb} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
            </div>
        )
    },
    spring: {
        title: "Happy feet",
        desc: "I love the way you jump when you are excited or happy about something",
        icon: (
            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                <img alt="y" src={spring} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
            </div>
        )
    },
    leg: {
        title: "Leg Throw",
        desc: "I love the way you throw your leg around me when we are laying or sitting down",
        icon: (
            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                <img alt="y" src={leg} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
            </div>
        )
    },
    mmm: {
        title: "Mmmm",
        desc: "I love the way you go 'mmm' when I am hugging, kissing, or just being romantic with you :D",
        icon: (
            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                <img alt="y" src={mmm} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
            </div>
        )
    },
    sticker: {
        title: "Another love language",
        desc: "I love the way you send me stickers all the time, it always adds another layer of communication :)",
        icon: (
            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                <img alt="y" src={sticker} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
            </div>
        )
    },
    smile: {
        title: "Smile!",
        desc: "I love the way you smile, all the time, always <3",
        icon: (
            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                <img alt="y" src={smile} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
            </div>
        )
    },
    wish: {
        title: "Make a wish!",
        desc: "I love the way you always remind me to make a wish, whether it be 11:11 or a fallen eyelash",
        icon: ( 
            <div id="l-icon" style={{width: 100, height: 100, margin: "15px auto"}}>
                <img alt="y" src={wish} height="50%" style={{filter: "brightness(0) invert(1)"}}/>
            </div>
        )
    }
}
