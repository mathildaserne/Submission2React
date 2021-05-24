import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import './SignIn.css'
import loadingGif3 from '../../shared/images/loadingGif3.gif'

export const SignIn = () => {
    const history = useHistory()
    const location = useLocation()

    return (
        <div>
            <br/>
            <img className="gif" src={loadingGif3} alt={'Error..'} />
            <h1 className="signInView">
            Sign in</h1> <br/>
            <h1 className="backToHome" onClick={() => history.push('./home')}>Go to home</h1> <br/>
            <h1 className="backToAbout" onClick={() => history.push('./about')}>Go to about</h1> <br/> 
            <h1 className="backToUser" onClick={() => history.push('./user')}>Go to user</h1> <br/> 
            <h1 className="state" >Path: {location.pathname}</h1>
        </div>
    )
}
