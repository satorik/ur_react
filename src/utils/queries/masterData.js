import { gql } from '@apollo/client'

export const GET_MASTER_DATA =  gql`{
	getMasterData(fandom: 1){
		character{
			id
			name_rus
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
	getNoun(id: $id){
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