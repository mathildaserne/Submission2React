import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import './User.css'

export const User = () => {
    const history = useHistory()
    const location = useLocation()

    return (
        <div>
            <br/>
            <h1  className="userView">
            User view</h1> <br/>
            <button className="backToHome" onClick={() => history.push('./home')}>Go to home</button> <br/> <br/>
            <button className="backToAbout" onClick={() => history.push('./about')}>Go to about</button> <br/> <br/>
            <button className="backToSignIn" onClick={() => history.push('./signin')}>Go to signin</button> <br/> <br/>
            <h1>Path is: {location.pathname}</h1>
        </div>
    )
}
