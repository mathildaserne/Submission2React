import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import './Home.css'
import loadingGif2 from '../../shared/images/loadingGif2.gif'

export const Home = () => {
    const history = useHistory()
    const location = useLocation() 

    return (
        <div>
            <br/>
            <img className="gif" src={loadingGif2} alt={'Error..'} />
            <h1 className="homeView">
            Home</h1> <br/>
            <h1 className="backToAbout" onClick={() => history.push('./about')}>Go to about</h1> <br/> 
            <h1 className="backToSignIn" onClick={() => history.push('./signin')}>Go to signin</h1> <br/> 
            <h1 className="backToUser" onClick={() => history.push('./user')}>Go to user</h1> <br/> 
            <h1 className="state" >State: {location.state}</h1>
        </div>
    )
}
