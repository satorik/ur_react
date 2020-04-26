import React from 'react'
import './App.css'
import {Game} from './pages/Game'
import {Header} from './components/Header'
import {Footer} from './components/Footer'

function App() {

  const oldEnough = localStorage.getItem('oe')
  
  return (
    <div className="App">
      <Header  />
      <Game  oldEnough={oldEnough || false} />
      <Footer />
       
    </div>
  );
}

export default App;
