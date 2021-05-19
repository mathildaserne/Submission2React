import React from 'react'
import {Routing} from '../src/routes/Routing'
import {NavigationBar} from '../src/components/navigationbar/NavigationBar'
import './shared/global/Global.css'
import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import {About} from './view/about/About'
import {Home} from './view/home/Home'
import {User} from './view/user/User'

export const App = () => {

	return (
		<Routing>
			<NavigationBar/>
		</Routing>
	)
}