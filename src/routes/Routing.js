import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {About} from '../view/about/About'
import {Home} from '../view/home/Home'
import {User} from '../view/user/User'
import {SignIn} from '../view/signin/SignIn'

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user' component={User}/>
                <Route exact path='/signin' component={SignIn}/>
                <Route component={Home}/>
            </Switch>
        </Router>
    )
}