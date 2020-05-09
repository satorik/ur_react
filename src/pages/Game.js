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
import {TextFaq} from '../components/TextFaq'

const CONDITION_BASIS = [{
  character: true,
  genre: false,
  location: false,
  raiting: false,
  trop: false,
  noun: false
},
{
  character: true,
  genre: true,
  location: true,
  raiting: true,
  trop: true,
  noun: false
}]


const checkConditions = (conditions) => {
  let nonChecked = true

  Object.keys(conditions).forEach(key =>  nonChecked = nonChecked && !conditions[key])

  return nonChecked
}

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

  const [variant, setVariant] = React.useState(0)
  const [results, setResults] = React.useState({show: false, results: {}})
  const [dialog, setDialog] = React.useState({dialogOpen: !oldEnough, checked: false})
  const [showContent, setShowContent] =  React.useState(oldEnough)
  const [conditions, setConditions] = React.useState(CONDITION_BASIS[variant])
  const [nonChecked, setNonChecked] = React.useState(false)

  React.useEffect(() => {
    
    if (variant === 0) {
      setNonChecked(false)
      setConditions(CONDITION_BASIS[variant])
    }
    if (variant === 1) {
      setNonChecked(checkConditions(conditions))
      setConditions(CONDITION_BASIS[variant])
    }

  }, [variant])

  const [getRandomNoun, {loading: nounLoading}]  = useMutation(queries.GET_RANDOM_NOUN)
  const [getRandomRaiting, {loading: raitingLoading}]  = useMutation(queries.GET_RANDOM_RAITING)
  const [getRandomCharacter, {loading: characterLoading}]  = useMutation(queries.GET_RANDOM_CHARACTER)
  const [getRandomLocation, {loading: locationLoading}]  = useMutation(queries.GET_RANDOM_LOCATION)
  const [getRandomGenre, {loading: genreLoading}]  = useMutation(queries.GET_RANDOM_GENRE)
  const [getRandomTrop, {loading: tropLoading}]  = useMutation(queries.GET_RANDOM_TROP)

  if (nounLoading || raitingLoading || characterLoading || locationLoading || genreLoading || tropLoading) return <Spinner />

  const RANDOM_MATRIX = {
    'noun': {'func': () => getRandomNoun(), 'name': 'getRandomNoun'},
    'raiting': {'func': () => getRandomRaiting(), 'name': 'getRandomRaiting'},
    'character': {'func': () => getRandomCharacter(), 'name': 'getRandomCharacter'},
    'location': {'func': () => getRandomLocation(), 'name': 'getRandomLocation'},
    'genre': {'func': () => getRandomGenre(), 'name': 'getRandomGenre'},
    'trop' : {'func': () => getRandomTrop(), 'name': 'getRandomTrop'},
  }
   

  const handleCheckChange = (event) => {
    setConditions({ ...conditions, [event.target.name]: event.target.checked })
    if (checkConditions({ ...conditions, [event.target.name]: event.target.checked })) setNonChecked(true)
    else setNonChecked(false)
  }

  const handleUserConsent = () => {
    if (dialog.checked) {
      localStorage.setItem("oe", "true")
    }

    setDialog({...dialog, dialogOpen:false})
    setShowContent(true)
  }

  const handleChange = (event, newValue) => {
    setVariant(newValue)
  }

  const chooseYourGame = async () => {

    if (!checkConditions(conditions)) {
      const results = await getResults(RANDOM_MATRIX, conditions)
      setResults({...results, show: true, results})
    }
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
          value={variant}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="Простая игра" className={classes.tab} />
          <Tab label="Сложная игра" className={classes.tab} />
          <Tab label="FAQ" className={classes.tab} />
        </Tabs>
      </Paper>
      {(variant === 0 || variant === 1) && <GameConditions 
        variant={variant} 
        gameOn={chooseYourGame} 
        handleChange={handleCheckChange}
        handleGame={chooseYourGame}
        nonChecked={nonChecked}
        state={conditions}
      />}
      {
        variant === 2 && <TextFaq />
      }
      
      </>
      }
      {
        results.show && showContent && <GameResults results={results.results} back={() => setResults({show: false, results: {}})} />
      }
    </Container>

  )
}
