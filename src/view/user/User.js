import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import './User.css'
import loadingGif4 from '../../shared/images/loadingGif4.gif'

export const User = () => {
    const history = useHistory()
    const location = useLocation()

    return (
        <div>
            <br/>
            <img className="gif" src={loadingGif4} alt={'Error..'} />
            <h1  className="userView">
            User</h1> <br/>
            <h1 className="backToHome" onClick={() => history.push('./home')}>Go to home</h1> <br/> 
            <h1 className="backToAbout" onClick={() => history.push('./about')}>Go to about</h1> <br/> 
            <h1 className="backToSignIn" onClick={() => history.push('./signin')}>Go to signin</h1> <br/> 
            <h1 className="state" >State: {location.state}</h1>
        </div>
    )
}
