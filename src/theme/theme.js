import { createMuiTheme } from '@material-ui/core/styles'
import lime from '@material-ui/core/colors/lime'
import yellow from '@material-ui/core/colors/yellow'
import grey from '@material-ui/core/colors/grey'


const theme = createMuiTheme({
  palette: {
    primary: {main : lime[900], secondary: lime[100], darklime: '#0a0901'},
    secondary: {main: grey[900]},
    error: {main: yellow[500]}
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, sans-serif'
  },
})

export default theme
