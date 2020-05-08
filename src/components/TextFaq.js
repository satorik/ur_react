import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: 'left'
  },
  title: {
    fontWeight: 700
  },
  bold: {
    fontWeight: 500
  },
  italic: {
    fontStyle: 'italic'
  },
  box: {
    paddingLeft: theme.spacing(3)
  }
}))

export const TextFaq = () => {

  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" color="primary" component="p" paragraph className={classes.title}>1. ГДЕ Я?</Typography>
      <Typography variant="body1" color="textSecondary" component="p" paragraph className={classes.italic} align="justify">Я, по правде, ничего не знаю, но всё в порядке. Вы, дорогой друг на стезе самосовершенствования, — в самом защищённом месте Цинхэ Не. Под присмотром дагэ с Вами не случится ничего плохого.
      </Typography>
      <Typography variant="body1" color="secondary" component="p" paragraph className={classes.italic} align="justify">«Нечистая Юдоль» — игра: генератор заявок на фанфик, арт или любой иной вид творчества. Генератор предназначен для развлечения, творческой практики и возможности бросить вызов себе или даже посоревноваться с друзьями. На текущий момент мы предлагаем выбор героев и мест, относящихся к фандому «Mo Dao Zu Shi», но т. к. из перечня можно получить любое число параметров на ваше усмотрение — играть можно по любому фандому.
      </Typography>
      <Typography variant="h6" color="primary" component="p" paragraph className={classes.title}>2. ЧТО ТАКОЕ "ПРОСТАЯ ИГРА"?</Typography>
      <Typography variant="body1" color="secondary" component="p" paragraph align="justify">При нажатии кнопки «Играть» в «Простой игре», Вы получите карточку с заданием. Карточка будет содержать 2 имени совершенно рандомных персонажей в рамках фандома, присуствовавших в новелле, дораме, сиквелах дорамы. Именно об этих героях должна быть ваша работа.
      </Typography>
      <Typography variant="h6" color="primary" component="p" paragraph className={classes.title}>3. ПАРАМЕТРЫ "СЛОЖНОЙ ИГРЫ"</Typography>
      <Typography variant="body1" color="secondary" component="p" paragraph align="justify">Вы включаете тумблер того или иного параметра и Ваше задание становится на один заданный параметр сложнее. Что можно получить?
      </Typography>
      <Box className={classes.box}>
      <Typography variant="body1" color="secondary" component="p" align="justify">
        <Typography variant="body1" color="primary" component="span" className={classes.bold}>персонажи</Typography>
        <Typography variant="body1" component="span"> — рандомные герои из канона, как и при «Простой игре» (не обязательно сочетать их в форме романтической линии, используйте всю доступную свободу)</Typography>
      </Typography>

      <Typography variant="body1" color="secondary" component="p" align="justify">
        <Typography variant="body1" color="primary" component="span" className={classes.bold} >место</Typography>
        <Typography variant="body1" component="span"> — рандомная локация из канона</Typography>
      </Typography>

      <Typography variant="body1" color="secondary" component="p" align="justify">
        <Typography variant="body1" color="primary" component="span" className={classes.bold}>рейтинг</Typography>
        <Typography variant="body1" component="span"> — возрастное ограничение аудитории работы (от G до NC-17)</Typography>
      </Typography>

      <Typography variant="body1" color="secondary" component="p" align="justify">
        <Typography variant="body1" color="primary" component="span" className={classes.bold}>жанр</Typography>
        <Typography variant="body1" component="span"> — основной жанр</Typography>
      </Typography>

      <Typography variant="body1" color="secondary" component="p" align="justify">
        <Typography variant="body1" color="primary" component="span" className={classes.bold}>троп</Typography>
        <Typography variant="body1" component="span"> — типовой сюжетный поворот либо завязка сюжета</Typography>
      </Typography>

      <Typography variant="body1" color="secondary" component="p" paragraph align="justify">
        <Typography variant="body1" color="primary" component="span" className={classes.bold}>ключ-слово</Typography>
        <Typography variant="body1" component="span"> —  (!для самых смелых) рандомное слово из базы около 51 000 существительных, которое может стать темой работы, быть использовано или загадано в ней</Typography>
      </Typography>
      </Box>

      <Typography variant="h6" color="primary" component="p" paragraph className={classes.title}>4. ОСТАЛИСЬ ВОПРОСЫ ИЛИ ПРЕДЛОЖЕНИЯ?</Typography>
      <Typography variant="body1" color="secondary" component="p" paragraph align="justify">С нами можно связаться, написав на почту fta.group.2018@gmail.com, или в личку тви @TAsdurden
      </Typography>

    </Paper>
  )
}
