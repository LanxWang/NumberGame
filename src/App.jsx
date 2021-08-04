import React, { Component } from 'react'
import NewGame from './components/NewGame'
import CheckGame from './components/CheckGame'
import './index.css'
export default class App extends Component {
  state={arrNum:[],tips:[]}
  getNewNum=(arrNum)=>{
    this.setState(arrNum)
    this.setState({tips:[""]})
  }
  getTips=(str)=>{
    const {tips}=this.state
    this.setState({tips:[...tips,str]})
  }
  render() {
    const {arrNum,tips}=this.state
    console.log(`arrNum`, arrNum)
    return (
      <div className='numGame'>
        <h1 className='title'>GUESS NUMBER GAME</h1>
        <NewGame className='newGame' getNewNum={this.getNewNum} num={arrNum }/>
        <CheckGame className='checkGame' getTips={this.getTips} num={arrNum } tips={tips } />
      </div>
    )
  }
}
