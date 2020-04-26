import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
  },
}))

export const ErrorComponent = () => {

  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="p" color='primary' >Произошла ошибка!</Typography>
    </Paper>
  )
}
