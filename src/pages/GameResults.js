import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { getShareUrl } from '../utils/createShare'


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    margin: '0 auto'
  },
  media: {
    height: 140,
  },
  title: {
    textAlign: 'left'
  },
  condition: {
    textAlign: 'right'
  }
}))

const translation = {
  'character': 'Персонажи',
  'genre': 'Жанр',
  'raiting': 'Рейтинг',
  'trop': 'Троп',
  'location': 'Место',
  'noun': 'Слово',
}

export const GameResults = ({results, back}) => {

  const classes = useStyles()

  const formResultsDiv = (title, output) => {
    return (
      <React.Fragment key={title}>
       <Grid item xs={4} className={classes.title} >
        <Typography variant="body1" component="span" color='primary' className={classes.title}>{translation[title]}</Typography>
      </Grid>
      <Grid item xs={8} className={classes.condition} >
        <Typography variant="body2" color="textSecondary" component="span">{output.map(out => out.name_rus).join(', ')}</Typography>
      </Grid>      
      </React.Fragment>
    )
  }

  const link = getShareUrl(results)

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL+"/images/card-header.png"}
          title="Contemplative Reptile"
          onClick={back}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ваша игра
          </Typography>
          <Grid container spacing={1}>
            { Object.keys(results).map(key => formResultsDiv(key, results[key])) }
          </Grid>

        </CardContent>

        <CardActions>
          <Button size="small" color="primary" href={link}>
            Tweet
          </Button>
          <Button size="small" color="primary" onClick={back}>
            Сыграть еще
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
