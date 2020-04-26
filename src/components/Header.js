import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.darklime,
  },
  title: {
    color: theme.palette.primary.secondary,
    fontFamily: 'Oswald'
  },
  image: {
    width: '30px', 
    height: '30px',
    marginRight: theme.spacing(2)
  }
  }
  ))

export const Header = () => {

  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" size="medium">
          <img src={process.env.PUBLIC_URL+"/images/Nie4040lime.png"} alt="" className={classes.image} />
        </IconButton>
        <Typography variant="h6" className={classes.title} >
          НЕЧИСТАЯ ЮДОЛЬ
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
