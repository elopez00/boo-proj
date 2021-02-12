import React, { useState, useEffect } from 'react'
import './V.css'

import { Button, Modal } from '../../layout'

// gardens / sawgrass
import garCover from '../../../assets/photo-albums/gardens/cover.jpg'
import gar1 from '../../../assets/photo-albums/gardens/gar1.jpg'
import gar2 from '../../../assets/photo-albums/gardens/gar2.jpg'
import gar3 from '../../../assets/photo-albums/gardens/gar3.jpg'
import gar4 from '../../../assets/photo-albums/gardens/gar4.jpg'

// beach 
import beaCover from '../../../assets/photo-albums/beach/cover.jpg'
import bea1 from '../../../assets/photo-albums/beach/bea1.jpg'
import bea2 from '../../../assets/photo-albums/beach/bea2.jpg'
import bea3 from '../../../assets/photo-albums/beach/bea3.jpg'
import bea4 from '../../../assets/photo-albums/beach/bea4.jpg'

// dinner
import dinCover from '../../../assets/photo-albums/dinner/cover.jpg'
import din1 from '../../../assets/photo-albums/dinner/din1.jpg'
import din2 from '../../../assets/photo-albums/dinner/din2.jpg'
import din3 from '../../../assets/photo-albums/dinner/din3.jpg'

// pottery 
import potCover from '../../../assets/photo-albums/pottery/cover.jpg'
import pot1 from '../../../assets/photo-albums/pottery/pot1.jpg'
import pot2 from '../../../assets/photo-albums/pottery/pot2.jpg'
import pot3 from '../../../assets/photo-albums/pottery/pot3.jpg'
import pot4 from '../../../assets/photo-albums/pottery/pot4.jpg'

// botanical gardens
import botCover from '../../../assets/photo-albums/botanical/cover.jpg'
import bot1 from '../../../assets/photo-albums/botanical/bot1.jpg'
import bot2 from '../../../assets/photo-albums/botanical/bot2.jpg'
import bot3 from '../../../assets/photo-albums/botanical/bot3.jpg'
import bot4 from '../../../assets/photo-albums/botanical/bot4.jpg'
import bot5 from '../../../assets/photo-albums/botanical/bot5.jpg'

// saint augustine
import saiCover from '../../../assets/photo-albums/st-augustine/cover.jpg'
import sai1 from '../../../assets/photo-albums/st-augustine/sai1.jpg'
import sai2 from '../../../assets/photo-albums/st-augustine/sai2.jpg'
import sai3 from '../../../assets/photo-albums/st-augustine/sai3.jpg'
import sai4 from '../../../assets/photo-albums/st-augustine/sai4.jpg'

export default function V(props) {
    // state 
    const [view, setView] = useState("garden");
    const [modal, showModal] = useState(false);
    const [pic1, showPic1] = useState(false);
    const [pic2, showPic2] = useState(false);
    const [pic3, showPic3] = useState(false);
    const [pic4, showPic4] = useState(false);
    const [pic5, showPic5] = useState(false);
    const [pic6, showPic6] = useState(false);

    useEffect(() => {
        setTimeout(() => showPic1(true), 300)
        setTimeout(() => showPic2(true), 500)
        setTimeout(() => showPic3(true), 400)
        setTimeout(() => showPic4(true), 500)
        setTimeout(() => showPic5(true), 400)
        setTimeout(() => showPic6(true), 300)
    }, [])

    const onClick = clickedView => {
        setView(clickedView);
        showModal(true);
    }

    return (
        <div className="module">
            <div className="back-module">
                <Button onClick={() => props.changePage("dashboard")}>
                    <i className="material-icons">keyboard_arrow_left</i>
                    Dash
                </Button>
                <p style={{fontWeight: "normal"}}>I LO<strong style={{color: "#467bc7"}}>V</strong>E U</p>
            </div>
            <div id="desc">
                <p>I already have made quite a bit of memories with you, here are some very very
                    extraordinary ones that I like to look back at
                </p>
            </div>
            <div id="v-modules">
                <div id="gar-img" style={{opacity: pic1 ? 1 : 0}} onClick={() => onClick("garden")}/>
                <div id="bea-img" style={{opacity: pic2 ? 1 : 0}} onClick={() => onClick("beach")}/>
                <div id="fam-img" style={{opacity: pic3 ? 1 : 0}} onClick={() => onClick("dinner")}/>
                <div id="pot-img" style={{opacity: pic4 ? 1 : 0}} onClick={() => onClick("pottery")}/>
                <div id="bot-img" style={{opacity: pic5 ? 1 : 0}} onClick={() => onClick("botanical")}/>
                <div id="sai-img" style={{opacity: pic6 ? 1 : 0}} onClick={() => onClick("stAug")}/>
            </div>
            <p id="v-song">V is for very very extraordinary</p>
            <Modal modal={modal} showModal={showModal}>
                <div id="v-modal">
                    <h3 style={{justifySelf: "center"}}>{gallery[view].title}</h3>
                    <div id="v-gallery">
                        { gallery[view].images.map(image => (
                            <img src={image} />
                        )) }
                    </div>
                    <div style={{padding: "0 20px"}}>
                        <p style={{marginBottom: 6}}>{gallery[view].desc}</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

const gallery = {
    garden: {
        title: "Flamingo Gardens",
        images: [garCover, gar1, gar2, gar3, gar4],
        desc: " This was our first date of the winter break, we went to"
            + " Flamingo Gardens and ate at Cheesecake Factory in Sawgrass."
            + " This was also the first time I flexed you on the gram ;)"
    },
    beach: {
        title: "Ft. Lauderdale Beach",
        images: [beaCover, bea1, bea2, bea3, bea4],
        desc: " This was the first time you met part of my family."
            + " For me this was an important step for our relationship"
            + " because they have been a fundamental constant in my life"
            + " that I wanted you to meet. I'm glad you were able to be"
            + " there :)"
    },
    dinner: {
        title: "Family Dinner",
        images: [dinCover, din1, din2, din3],
        desc: " This was the first time I met your parents, sister, and Flaco."
            + " I'm not going to lie, I hella down-played how nervous I was in"
            + " the beginning. I just really wanted to make a good impression,"
            + " so that your parents knew that I was good for their daughter."
            + " I'm glad it went so well, and I feel closer to you knowing them."
    },
    pottery: {
        title: "Edina & Stephano",
        images: [potCover, pot3, pot2, pot1, pot4],
        desc: " The conception of Edina and Stephano all occured here. This"
            + " was our first date after you came back to Gainesville and"
            + " all the time we spent in Colors & Corks was memorably wholesome."
            + " I love spending time with you, and making them was time well spent."
    },
    botanical: {
        title: "Botanical Gardens",
        images: [botCover, bot5, bot3, bot2, bot1, bot4],
        desc: " This was the first time I ever went out with your roommates and"
            + " your friends. It was super cold but your hugs were very warm so"
            + " it was pretty bareably I guess. I had so much fun spending time"
            + " with you as well as making fun of the potheads on-top of the jeep that day."
    },
    stAug: {
        title: "Saint Augustine",
        images: [saiCover, sai1, sai2, sai3, sai4],
        desc: " Saint Augustine was super memorable. I loved walking around the 400"
            + " year old city with you. That hot chocolate we had at the bar was"
            + " pretty gas, and what made it the best was that you would kiss me"
            + " every now and then between sips. 10/10."
    }
}