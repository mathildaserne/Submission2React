import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import './SignIn.css'

export const SignIn = () => {
    const history = useHistory()
    const location = useLocation()

    return (
        <div>
            <br/>
            <h1 className="signInView">
            Sign in</h1> <br/>
            <button className="backToHome" onClick={() => history.push('./home')}>Go to home</button> <br/> <br/>
            <button className="backToAbout" onClick={() => history.push('./about')}>Go to about</button> <br/> <br/>
            <button className="backToUser" onClick={() => history.push('./user')}>Go to user</button> <br/> <br/>
            <h1>Path is: {location.pathname}</h1>
        </div>
    )
}
