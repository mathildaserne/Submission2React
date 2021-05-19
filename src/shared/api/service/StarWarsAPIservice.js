import http from './StarWarsAPI'

const getStarwarsCharacter = (number) => {
	return http.get(`people/${number}`)
}

export default {
	getStarwarsCharacter
}