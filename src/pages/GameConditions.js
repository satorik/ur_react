import React from 'react'

import { makeStyles } from '@material-ui/core/styles'


import { Paper, FormControl, FormGroup, FormLabel, Switch, FormControlLabel, FormHelperText, Button, Typography } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5)
  }
}))

const checkConditions = (conditions) => {
  let nonChecked = true

  Object.keys(conditions).forEach(key =>  nonChecked = nonChecked && !conditions[key])

  return nonChecked
}

export const GameConditions = ({variant, gameOn}) => {

  const classes = useStyles()

  const [state, setState] = React.useState({
    character: true,
    genre: false,
    location: false,
    raiting: false,
    trop: false,
    noun: false
  })

  const [nonChecked, setNonChecked] = React.useState(false)

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    if (checkConditions({ ...state, [event.target.name]: event.target.checked })) setNonChecked(true)
    else setNonChecked(false)
  }

  const handleGame = () => {
    console.log('GameConditions', checkConditions(state))
    if (!checkConditions(state)) gameOn(state)
  }

  const formConditions =
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">Выберите сложность игры</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.character} onChange={handleChange} name="character" />}
          label="Выдать случайных персонажей"
        />
        <FormControlLabel
          control={<Switch checked={state.genre} onChange={handleChange} name="genre" />}
          label="Выдать случайный жанр"
        />
        <FormControlLabel
          control={<Switch checked={state.location} onChange={handleChange} name="location" />}
          label="Выдать случайное место"
        />
        <FormControlLabel
          control={<Switch checked={state.noun} onChange={handleChange} name="noun" />}
          label="Выдать случайное слово"
        />
        <FormControlLabel
          control={<Switch checked={state.raiting} onChange={handleChange} name="raiting" />}
          label="Выдать случайный рейтинг"
        />
        <FormControlLabel
          control={<Switch checked={state.trop} onChange={handleChange} name="trop" />}
          label="Выдать случайный троп"
        />
      </FormGroup>
      <FormHelperText>И да прибудит с вами Суй Хуа</FormHelperText>
      </FormControl>
   
  const gameButton = <Button variant="contained" color="primary" onClick={handleGame}>Играть!</Button>


  return (
    <Paper className={classes.paper}>
      { nonChecked && <Typography variant="body1" component="p" color='error' >Выберите хотя бы одно условие</Typography>}
      {variant === 1 && formConditions}
      {gameButton}
    </Paper>
  )
}
