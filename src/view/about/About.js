import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {useEffect, useState, useContext} from 'react'
import './About.css'
import loadingGif from '../../shared/images/loadingGif.gif'
import StarWarsAPIservice from '../../shared/api/service/StarWarsAPIservice'
import {UserContext} from '../../shared/provider/UserProvider'

export const About = () => {
    const history = useHistory()
    const location = useLocation()
    const [count, setCount] = useState(1)
	const [character, setCharacter] = useContext(UserContext)
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
			<button className="buttonCount" onClick={() => setCount(count + 1)}>Load new character {count} </button> <br />
			<button className="buttonCount" onClick={() => setCount(count - 1)}>Go back {count} </button> 
		</div>
	}

    const displayCharacterName = () => {
        if (!loading)
        {
			return ( 
            <div className="character">
				<h3>Name of character: {(character || undefined)?.name}</h3>
                <h3>Height of character: {(character || undefined)?.height}</h3>
                <h3>Hair color of character: {(character || undefined)?.hair_color}</h3>
			</div>
            )
        }
        else {
			return <img className="loadingGif" src={loadingGif} alt={'Error..'} /> 
        }
	}

    return (
        <div>
            <br/> <br/>
            {displayCharacterName()} <br/>
            <h1 className="aboutView">
            About</h1> 
            {buttons()} <br/> 
            <h1 className="backToHome" onClick={() => history.push('/home', 'To home')}>Go to home</h1> <br/>
            <h1 className="backToSignIn" onClick={() => history.push('/signin')}>Go to signin</h1> <br/> 
            <h1 className="backToUser" onClick={() => history.push('/user')}>Go to user</h1> <br/> <br/>
        </div>
    )
}