import React from 'react'
import CardOpen from '../CardOpen'
import './Card.css'

import { Button } from '../../layout'

export default function Card(props) {
    return (
        <div className="card">
            <CardOpen />
            <div id="paper">
                <p>Dear Stephi,</p>
                <p> This is just an introduction to the present. Just wanted you to
                    have the full experience by opening your card through here.
                </p>
                <p> I wanted this present to be unlike anything I've ever given while
                    still being 100% me... so I coded it. Everything you see in this gift
                    was made from the ground up after weeks of planning and programming. I hope you 
                    like it and just know that you can go back to this card however
                    many times you want and it won't be lost (in case u ever forget how much I love u).
                </p>
                <p> Without further ado...</p>
                <Button style={{marginLeft: 25}} variant="bright-red" onClick={() => props.changePage('dashboard')}>Go to present</Button>
            </div>
        </div>
    )
}