import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Paper, FormControl, FormGroup, FormLabel, Switch, FormControlLabel, FormHelperText, Button, Typography, Tooltip } from '@material-ui/core'


const TOOLTIP = 'Осторожно! База слов - АГОНЬ! В смысле полный словарь Ожегова, без шуток!'



const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5)
  },
  error: {
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing(2)
  },
  btn: {
    color: theme.palette.primary.secondary,
  }
}))

export const GameConditions = ({variant, handleChange, handleGame, nonChecked, state}) => {

  const classes = useStyles()

  const formConditions =
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">выберите сложность игры</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.character} onChange={handleChange} name="character" color="primary" />}
          label="персонажи"
        />
        <FormControlLabel
          control={<Switch checked={state.location} onChange={handleChange} name="location" color="primary" />}
          label="место"
        />
        <FormControlLabel
          control={<Switch checked={state.raiting} onChange={handleChange} name="raiting" color="primary" />}
          label="рейтинг"
        />
        <FormControlLabel
          control={<Switch checked={state.genre} onChange={handleChange} name="genre" color="primary" />}
          label="жанр"
        />
        <FormControlLabel
          control={<Switch checked={state.trop} onChange={handleChange} name="trop" color="primary" />}
          label="троп"
        />
        <Tooltip title={TOOLTIP} placement="bottom-start">
          <FormControlLabel
            control={<Switch checked={state.noun} onChange={handleChange} name="noun" color="primary" />}
            label="ключ-слово"
          />
        </Tooltip>
      </FormGroup>
      </FormControl>
   
  const gameButton = <Button variant="contained" color="primary" onClick={handleGame} size="large">
    <Typography variant="h5" className={classes.btn}>Играть</Typography>
  </Button>


  return (
    <Paper className={classes.paper}>
      { nonChecked && <Typography variant="body1" component="p" color='error' className={classes.error} >Выберите хотя бы одно условие</Typography>}
      {variant === 1 && formConditions}
      {gameButton}
    </Paper>
  )
}
