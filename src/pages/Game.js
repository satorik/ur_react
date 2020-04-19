import React from 'react'
import { useQuery, useLazyQuery, useMutation } from '@apollo/client'
import * as queries from '../utils/queries/masterData'
import { Paper, Tabs, Tab, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {GameConditions} from './GameConditions'
import Spinner from '../components/UI/Spinner'
import {GameResults} from './GameResults'

import {getResults} from '../utils/calcGame'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5)
  }
}))


export const Game = () => {

  const classes = useStyles()

  const [value, setValue] = React.useState(0)
  const [results, setResults] = React.useState({
    show: false, 
    results: {}
  })

  const { loading: queryLodading, error: queryError, data } = useQuery(queries.GET_MASTER_DATA)
  const [getNounById, {loading: nounLoading, error: nounError}]  = useMutation(queries.GET_NOUN)
  const [createGame, {loading: gameLoading, error: gameError}]  = useMutation(queries.CREATE_GAME)

  if (queryLodading) return <Spinner />

  const { getMasterData } = data

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const chooseYourGame = async (conditions) => {
   
    const results = await getResults(getMasterData, conditions, getNounById)
    const inputConditions = Object.keys(results)
      .map(key => results[key]
      .map(item => {
        return {
          conditionType: key,
          conditionId: +item.id
      }
      }))
      .flat(1)

    // const inputData = {conditions: inputConditions}
    //const game = await createGame({variables: {inputData}})
    setResults({...results, show: true, results})
  }


  return (
    <Container fixed className={classes.container}>
      {!results.show && <><Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="Простая игра" />
          <Tab label="Сложная игра" />
          <Tab label="Результаты" disabled />
        </Tabs>
      </Paper>
      <GameConditions variant = {value} gameOn={chooseYourGame}/></>
      }
      {
        results.show && <GameResults results={results.results} back={() => setResults({show: false, results: {}})} />
      }
    </Container>

  )
}
