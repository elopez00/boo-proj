import React, { useState, useEffect } from 'react'
import './E.css'

import { Button, Modal } from '../../layout'

export default function E(props) {
    const [open, openEnvelope] = useState(false);
    const [card, showCard] = useState(false);
    const [envelope, showEnvelope] = useState(false);
    const [paper, showPaper] = useState(false);

    const manageTransition = () => {
        if (!open) {
            openEnvelope(true);
            setTimeout(() => showCard(true), 800);
            setTimeout(() => showPaper(true), 900)
        } else {
            showCard(false)
            showPaper(false);
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
                <p> This last is just a memory. My recount of our first date. I go into a lot of detail so
                    bare with me.
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
            <Modal modal={paper} showModal={showPaper} onClose={() => manageTransition()} paper>
                <div>
                    <p>Dear Steph,</p>
                    <p> When
                        we started dating, funnily enough, I didn't know what I wanted. I came in with 0 
                        expectations, and decided to let things happen for once and see where they go. I know 
                        we didn't have a very flattering meetcute, but it was the first time I had ever 
                        considered being in a relationship with anyone after my last relationship. 
                    </p>
                    <p> I vividly remember picking you up from your parent's place for the first time. I 
                        remember before I pulled up to their place, I parked a little before to try to
                        calm myself down. I am usually very good at meeting new people, but this time
                        was definetly different. Then I saw you standing in the driveway and I promise
                        my heart skipped a beat. You were stunning. I remember that the drive to Wynwood
                        was just me trying to get a grip, so I would nervously talk and try to start
                        converstion. You were being polite and nice with a pokerface that I couldn't really read.
                    </p>
                    <p> I remember when we got there, it was just me and you, and this time we were actually
                        having conversations. We went to go eat at 1-800-Lucky where we ordered the same food.
                        I remember we talked about voting, politicians, and school. You were smiling
                        a lot. It felt like I was making a breakthrough. Then the night took us to tourist around
                        the rest of Wynwood, the design distctrict, and finally the mall.
                    </p>
                    <p> I remember we had a funny conversation in the car. I had wanted to hold your hand the 
                        entire night but couldn't get myself to because I was anxious about your reaction. You
                        told me that it was okay, and we gave it a test run. I saw your smile as we did and that 
                        reassured to me that was okay to be lil' romantic.
                        We got out of the car and we started walking together. We went inside the mall and I felt
                        so good being with you. It was just holding hands, but it felt right. It felt like I wanted
                        to do it more often.
                    </p>
                    <p> We left the mall, and started walking near a park. I was telling you about my enfatuation
                        with Mariah Carey's "All I want for Christmas is you" song as we went. We sat down in a bench
                        in the dark and we began a new conversation. I remember how distant you were in the beginning,
                        and the more we talked the closer you got. I felt so comfortable with you that I decided to tell
                        you about my transition from Nicaragua to here, how hard it was. I remember I almost even teared
                        up thinking about all of it, and you just smiled and nodded. Then we went silent, all I wanted to 
                        do was kiss you. So I did.
                    </p>
                    <p> It could have been just me, but it felt electric, all I wanted was more and more. I wished that
                        night never ended, but I couldn't go back too late, and you probably needed to be home too. We walked
                        back out to the street hand in hand. I thought, "I could get used to this." You had made my night,
                        my week, my month, my year just in that small moment. I had a rough year, and had just gotten over
                        some even rougher obstacles in my life, but there you were, without even knowing me a day, making 
                        my happier than I could describe.
                    </p>
                    <p> I just wanted to be with you, and I hoped that the next time we met would come sooner rather
                        than later. Little did I know you would come into my life and start becoming a constant. I 
                        think back to our first date now and then and think about how crazy it is to think that you are 
                        my girlfriend now. 
                    </p>
                    <p> Thank you for sticking around with me this long.</p>
                    <p> Happy Valentine's day, I love you Stephanie</p>
                </div>
            </Modal>
        </div>
    )
}