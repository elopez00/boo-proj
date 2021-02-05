import React from 'react'
import './TextInput.css'

export default function TextInput(props) {
    return (
        <input type={props.password ? "password" : "text"} className="boo-proj-textinput" {...props}/>
    )
}