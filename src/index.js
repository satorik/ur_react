import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloProvider  } from '@apollo/client'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme/theme'
import client from './client'


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </React.StrictMode>
  </ApolloProvider>
  ,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
