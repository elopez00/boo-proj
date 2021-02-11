import React, { useState, useEffect } from 'react'
import './O.css'

import { Button, Modal } from '../../layout'
import love from '../../../assets/heart.png'
import understand from '../../../assets/understand.png'
import support from '../../../assets/support.png'
import megaphone from '../../../assets/megaphone.png'

export default function O(props) {
    // state 
    const [module1, showModule1] = useState(false);
    const [module2, showModule2] = useState(false);
    const [module3, showModule3] = useState(false);
    const [module4, showModule4] = useState(false);

    // modal
    const [modal, showModal] = useState(false);
    const [focused, changeFocus] = useState("love");

    // imitates componentDidMount
    useEffect(() => {
        setTimeout(() => showModule1(true), 300);
        setTimeout(() => showModule2(true), 500);
        setTimeout(() => showModule3(true), 700);
        setTimeout(() => showModule4(true), 900);
    }, [])

    const onClick = type => {
        showModal(true);
        changeFocus(type);
    }

    return (
        <div className="module">
            <div className="back-module">
                <Button onClick={() => props.changePage("dashboard")}>
                    <i className="material-icons">keyboard_arrow_left</i>
                    Dash
                </Button>
                <p style={{fontWeight: "normal"}}>I L<strong style={{color: "#7f6bff"}}>O</strong>VE U</p>
            </div>
            <div id="desc">
                <p> Other than mannerisms, there are other things you do that solidify
                    you as the only girl for me. I want you to know how much I appreciate
                    you, so I made references to 4 things that you do that make you the only 
                    one I want.
                </p>
            </div>
            <div id="o-modules">
                <div onClick={() => onClick("love")} style={{opacity: module1 ? 1 : 0}}>
                    <img id="o-icon" src={love} alt="heart" />
                    <p>Love</p>
                </div>
                <div onClick={() => onClick("support")} style={{opacity: module2 ? 1 : 0}}>
                    <img id="o-icon" src={support} alt="x" />
                    <p>Support</p>
                </div>
                <div onClick={() => onClick("communication")} style={{opacity: module3 ? 1 : 0}}>
                    <img id="o-icon" src={megaphone} alt="x" />
                    <p>Communication</p>
                </div>
                <div onClick={() => onClick("understanding")} style={{opacity: module4 ? 1 : 0}}>
                    <img id="o-icon" src={understand} alt="x" />
                    <p>Understanding</p>
                </div>
            </div>
            <p id="o-song">O is for the only one I see...</p>
            <Modal modal={modal} showModal={showModal} fullscreen>
                <div style={{padding: 30, display: 'flex', flexDirection: "column", alignItems: "center"}}>
                    <div id="o-icon-bubble">
                        <img id="o-icon" src={qualities[focused].img} alt="whocares"/>
                    </div>
                    <h1 style={{margin: 0, marginTop: 16}}>{qualities[focused].title}</h1>
                    <p>{qualities[focused].desc}</p>
                </div>
            </Modal>
        </div>
    )
}

const qualities = {
    love: {
        img: love,
        title: "Love",
        desc: " You make me feel like I've never"
            + " been properly loved until I met you. That's something that means more than"
            + " I can explain, and it inspires me everyday to be someone more worthy of that"
            + " kind of affection. I've been used to just living life expecting nothing from"
            + " people, creating this cynic narrative that I just wasn't meant to be with someone that could give me that attention."
            + " I hate mentioning my previous relationship, but the impact it had on me was"
            + " pretty strong, and I didn't really know if I could ever fall in love like I"
            + " did, but you came along and proved me wrong. I don't take the words 'I love you'"
            + " lightly, and when I say them to you, I truly mean them. So when you say them"
            + " back, if you ever see me giddy or excited, its because it feels like you mean them too."
    }
}