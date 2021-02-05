import React from 'react'
import './Login.css'

import PWModule from '../PWModule'

export default function Login(props) {
    return (
        <div className="boo-proj-login">
            <span>
                <h1>Hey you...</h1>
                <p>I just got to check that <strong>you</strong> should be seeing this :)</p>
                <PWModule validation={props.validate}/>
            </span>
        </div>
    )
}