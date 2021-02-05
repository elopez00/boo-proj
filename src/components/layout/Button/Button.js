import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <button className="boo-proj-button" id={props.variant} {...props}>
            { props.children }
        </button>
    )
}