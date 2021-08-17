import React, { Component } from 'react'
import NewGame from './containers/NewGame'
import CheckGame from './containers/CheckGame'
import './index.css'
export default class App extends Component {
  render() {
    return (
      <div className='numGame'>
        <h1 className='title'>GUESS NUMBER GAME</h1>
        <NewGame className='newGame'   />
        <CheckGame className='checkGame' />
      </div>
    )
  }
}

