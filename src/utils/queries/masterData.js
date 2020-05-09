import { gql } from '@apollo/client'

export const GET_MASTER_DATA =  gql`{
	getMasterData(fandom: 1){
		character{
			id
			name_rus
      main
		}
		location{
			id
			name_rus
		}
		genre{
			id
			name_rus
		}
		raiting{
			id
			name_rus
		}
		trop{
			id
			name_rus
		}
    noun
	}
}`

export const GET_NOUN =  gql`
mutation getNounById($id: ID!) {
	getRandomNoun(id: $id){
    id
		name_rus
	}
}`

export const GET_RANDOM_NOUN =  gql`
mutation getRandomNoun {
	getRandomNoun{
    id
		name_rus
	}
}`

export const GET_RANDOM_RAITING =  gql`
mutation getRandomRaiting {
	getRandomRaiting{
    id
		name_rus
	}
}`

export const GET_RANDOM_CHARACTER =  gql`
mutation getRandomCharacter {
	getRandomCharacter{
    id
		name_rus
	}
}`

export const GET_RANDOM_LOCATION =  gql`
mutation getRandomLocation {
	getRandomLocation{
    id
		name_rus
	}
}`

export const GET_RANDOM_GENRE =  gql`
mutation getRandomGenre {
	getRandomGenre{
    id
		name_rus
	}
}`

export const GET_RANDOM_TROP =  gql`
mutation getRandomTrop {
	getRandomTrop {
    id
		name_rus
	}
}`

export const CREATE_GAME =  gql`
mutation createGame($inputData: CreateGameData!) {
	createGame(inputData: $inputData){
    id
		status
    owner
    conditions {
      id
      conditionType
      conditionItem {
        id
        name_rus
      }
    }
	}
}`