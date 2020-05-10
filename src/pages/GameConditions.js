import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, FormControl, FormGroup, FormLabel, Switch, FormControlLabel, Button, Typography, Tooltip, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'


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
  },
  autocomplete: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export const GameConditions = ({variant, handleChange, handleGame, nonChecked, state, fandoms, handleFandom, fandom}) => {

  const classes = useStyles()

  const fandomSelect = <Autocomplete
    id="fandomBox"
    options={fandoms}
    size="small"
    value={fandom ? fandom : null}
    getOptionLabel={(option) => option.name_rus}
    className={classes.autocomplete}
    renderInput={(params) => <TextField {...params} label="Выберите фандом" variant="outlined" />}
    onChange={handleFandom}
  />

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
      {fandoms && <> 
        {fandomSelect}
        {variant === 1 && formConditions}
        {variant === 0 && <Typography variant="body1" component="p" color='textSecondary' gutterBottom>без выбора фандома доступна только "Сложная игра"</Typography>}
        {gameButton}
      </>}

    </Paper>
  )
}
