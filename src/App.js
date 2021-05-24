import React from 'react'
import {Routing} from '../src/routes/Routing'
import {NavigationBar} from '../src/components/navigationbar/NavigationBar'
import './shared/global/Global.css'
import {UserProvider} from './shared/provider/UserProvider'

export const App = () => {

	return (
	<UserProvider>
		<Routing>
			<NavigationBar/>
		</Routing>
	</UserProvider>	
	)
}