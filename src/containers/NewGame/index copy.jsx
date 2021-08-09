import React, { Component } from 'react'
import './index.css'
import {connect} from 'react-redux'
import {createNewNumAction} from '../../redux/actions/newGame'
import {createClearResultAction} from '../../redux/actions/checkGame'
import {createClearInputNumAction} from '../../redux/actions/inputNum'
import {createStartTipAction} from '../../redux/actions/inputTip'
import {createGameStateAction} from '../../redux/actions/gameState'


class NewGame extends Component {
  state={value:["","","",""],isDisplay:false}
  produceNewNum = ()=>{
    this.props. changeGameState(false)
    this.props.clearResult()
    this.props.clearInput()
    this.props.startTip()
    const {isDisplay} = this.state;
    if(isDisplay===true) return; 
    this.setState({isDisplay:true})
    this.props.createNewNum()
    setTimeout(() => {
      this.setState({value:[...this.props.newNum]})
    }, 10); //先this.props.createNewNum()后取this.props.newNum
    setTimeout(() => {
      this.setState({value:["","","",""]})
      this.setState({isDisplay:false})
    }, 1000);

  }

  showNum = ()=>{
    this.setState({isDisplay:true})
    this.setState({value:[...this.props.newNum]})
    setTimeout(() => {
      this.setState({value:["","","",""]})
      this.setState({isDisplay:false})
    }, 1000);
  }

  render() {
    const {value} = this.state
    return (
      <div className="newGame">
        <ul className="show-num-list">
          {value.map((num,index)=>{
            return <li key={index}>{num}</li>
          })}
        </ul>
        <button className="btn" onClick={this.produceNewNum} >New Game</button><br/><br/>
        <button className="btn" onClick={this.showNum}>Show Num</button>&nbsp;
      </div>
    )
  }
}

export default connect(
  state=>({
    newNum:state.newGame,
  }),
    
  {
    createNewNum:createNewNumAction,
    clearResult:createClearResultAction,
    clearInput:createClearInputNumAction,
    startTip:createStartTipAction,
    changeGameState:createGameStateAction
  }
)(NewGame)