import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './Home.css'

export const Home = () => {
    const history = useHistory()
    const location = useLocation()

    return (
        <div>
            <br/>
            <h1 className="homeView">
            Home view</h1> <br/>
            <button className="backToAbout" onClick={() => history.push('./about')}>Go to about</button> <br/> <br/>
            <button className="backToSignIn" onClick={() => history.push('./signin')}>Go to signin</button> <br/> <br/>
            <button className="backToUser" onClick={() => history.push('./user')}>Go to user</button> <br/> <br/>
            <h1>Path is: {location.pathname}</h1>
        </div>
    )
}
