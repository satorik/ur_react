import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import * as queries from '../utils/queries/masterData'
import { Paper, Tabs, Tab, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {GameConditions} from './GameConditions'
import Spinner from '../components/UI/Spinner'
import {GameResults} from './GameResults'
import {ErrorComponent} from '../components/Error/ErrorComponent'
import {DialogBasic} from '../components/UI/DialogBasic'


import {getResults} from '../utils/calcGame'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2)
  },
  tab: {
    fontSize: '1.2rem'
  }
}))


export const Game = ({oldEnough}) => {

  const classes = useStyles()

  const [value, setValue] = React.useState(0)
  const [results, setResults] = React.useState({
    show: false, 
    results: {}
  })
  const [dialog, setDialog] = React.useState({
    dialogOpen: !oldEnough,
    checked: true
  })

  const [showContent, setShowContent] =  React.useState(oldEnough)

  const { loading: queryLodading, error: queryError, data } = useQuery(queries.GET_MASTER_DATA)
  const [getNounById, {loading: nounLoading, error: nounError}]  = useMutation(queries.GET_NOUN)
  //const [createGame, {loading: gameLoading, error: gameError}]  = useMutation(queries.CREATE_GAME)

  if (queryLodading || nounLoading ) return <Spinner />
  if (queryError || nounError) return <ErrorComponent />

  const { getMasterData } = data

  const handleUserConsent = () => {
    if (dialog.checked) {
      localStorage.setItem("oe", "true")
    }

    setDialog({...dialog, dialogOpen:false})
    setShowContent(true)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const chooseYourGame = async (conditions) => {
//    console.log('Game', conditions)
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
      {
        dialog.dialogOpen && <DialogBasic 
          open={dialog.dialogOpen}
          handleClose={() => setDialog({...dialog, dialogOpen: false})}
          handleCancel={() => setDialog({...dialog, dialogOpen: false})} 
          checked={dialog.checked}
          handleChangeSaveChoice={() => setDialog({...dialog, checked: !dialog.checked})}
          handleAgree={handleUserConsent}
          agreeText="Мне есть 18"
          disagreeText="Мне нет 18" 
        />
      }

      {!results.show && showContent && <><Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="Простая игра" className={classes.tab} />
          <Tab label="Сложная игра" className={classes.tab} />
          <Tab label="FAQ" disabled className={classes.tab} />
        </Tabs>
      </Paper>
      <GameConditions variant = {value} gameOn={chooseYourGame}/></>
      }
      {
        results.show && showContent && <GameResults results={results.results} back={() => setResults({show: false, results: {}})} />
      }
    </Container>

  )
}
