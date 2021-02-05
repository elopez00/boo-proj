import React from 'react'
import './Module.css'

export default function Module(props) {
    return (
        <div style={{
            gridArea: props.id, 
            backgroundImage: props.color, 
            alignSelf: props.align,
            justifySelf: props.justify,
            opacity: props.opacity ? 1 : 0
         }} className="dashboard-module">
            <h1>{props.title}</h1>
            <i>{props.children}</i>
            <p>{props.desc}</p>
        </div>
    )
}