import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {Routing} from '../../routes/Routing'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import './About.css'
import loadingGif from '../../shared/images/loadingGif.gif'
import StarWarsAPIservice from '../../shared/api/service/StarWarsAPIservice'

export const About = () => {
    const history = useHistory()
    const location = useLocation()
    const [count, setCount] = useState(1)
	const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)

	const getCharacterNameFromStarwarsAPI = async () => {
        try {
            const { data } = await StarWarsAPIservice.getStarwarsCharacter(count)
            setCharacter(data)
            setLoading(false)
    } catch (error) {
            console.log('something went wrong!')
    }

	}

	useEffect (() => {
        setTimeout(() => {
            getCharacterNameFromStarwarsAPI()
        }, 2000);
    }, [count])        

    useEffect (() => {
        console.log(location)
        console.log(character)
    }, [])

    const buttons = () => {
		return <div>
            <br/>
			<button className="buttonCount" onClick={() => setCount(count + 1)}>Increment {count} </button> <br />
			<button className="buttonCount" onClick={() => setCount(count - 1)}>Decrement {count} </button> 
		</div>
	}

    const displayCharacterName = () => {
        if (!loading)
        {
			return ( 
            <div>
				<h2>{(character || undefined)?.name}</h2>
			</div>
            )
        }
        else {
			return <img src={loadingGif} alt={'Error..'} /> 
		}
	}

    return (
        <div>
            <br/>
            <h1 className="aboutView">
            About view</h1> <br/>
            {displayCharacterName()} <br/>
            {buttons()} <br/> <br/>
            <button className="backToHome" onClick={() => history.push('./home')}>Go to home</button> <br/>
            <button className="backToSignIn" onClick={() => history.push('./signin')}>Go to signin</button> <br/> <br/>
            <button className="backToUser" onClick={() => history.push('./user')}>Go to user</button> <br/> <br/>
            <h1>Path is: {location.pathname}</h1>
        </div>
    )
}