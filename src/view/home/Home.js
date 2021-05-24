import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import './Home.css'
import loadingGif2 from '../../shared/images/loadingGif2.gif'

export const Home = () => {
    const history = useHistory()
    const location = useLocation()
    const animalArray = ['Cat', 'Dog', 'Monkey', 'Shark', 'Snake']  
    const animalList = animalArray.map((animal)=>{return (animal)})
    const numArray = [1, 2, 4, 6]
    const X = numArray.map((number)=>{return (number + 10)})  

    return (
        <div>
            <br/>
            <img className="gif" src={loadingGif2} alt={'Error..'} />
            <h1 className="homeView">
            Home</h1> <br/>
            <h1 className="backToAbout" onClick={() => history.push('./about')}>Go to about</h1> <br/> 
            <h1 className="backToSignIn" onClick={() => history.push('./signin')}>Go to signin</h1> <br/> 
            <h1 className="backToUser" onClick={() => history.push('./user')}>Go to user</h1> <br/> 
            <h1 className="array">Arraynumbers (+ 10) {X[0]}, {X[1]}
            , {X[2]}, {X[3]}</h1> <br/>
            <h1 className="array">A {animalList[0]}, A {animalList[1]}, A {animalList[2]}, 
            A {animalList[3]}, A {animalList[4]}</h1>
            <h1 className="state" >State: {location.state}</h1> <br/>
        </div>
    )
}
