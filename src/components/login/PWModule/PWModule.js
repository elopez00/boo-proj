import React, { useState } from 'react'
import './PWmodule.css'

import { TextInput, Button } from '../../layout'

export default function PWModule(props) {
    /**
     * Validates the right password that only stephi should have
     */
    const validate = () => {
        const input = document.getElementById('pw-input').value;
        if (input === "e+s=<3") {
            props.validation();
        } else {
            document.getElementById("pw-input").value = "";
            alert("That is the wrong pw :(")
        }
    }

    // style for the enter button
    const buttonStyle = {
        margin: "0 auto",
        display: "block",
        marginTop: 20,
        width: 100
    }

    return (
        <div className="boo-proj-pwmodule">
            <TextInput placeholder="Enter Password" password id="pw-input"/>
            <p>*Hint: check the card</p>
            <Button onClick={validate} variant="red" style={buttonStyle}>
                Enter
            </Button>
        </div>
    )
}