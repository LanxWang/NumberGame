import React from 'react'
import './index.css'
import {connect} from 'react-redux'
import {createNewNumAction} from '../../redux/actions/newGame'
import {createClearResultAction} from '../../redux/actions/checkGame'
import {createClearInputNumAction} from '../../redux/actions/inputNum'
import {createStartTipAction} from '../../redux/actions/inputTip'
import {createGameStateAction} from '../../redux/actions/gameState'


function NewGame(props) {
  const {changeGameState,clearResult,clearInput,startTip,createNewNum} = props
  const {newNum} =props

  const [value,setValue] = React.useState(["","","",""])
  const [isDisplay,setIsDisplay] = React.useState(false)
    
  function produceNewNum() {
    changeGameState(false)
    clearResult()
    clearInput()
    startTip()
    console.log(`before newNum`, newNum)
    createNewNum()
    console.log('createNum done')
    console.log(`newNum:`, newNum)
    showNum()  
  }

  function showNum() {
    console.log(`showNum`, newNum)
    if(isDisplay===true) return; 
    setIsDisplay(true)
    setValue([...newNum])
    setTimeout(() => {
      setValue(["","","",""])
      setIsDisplay(false)
    }, 1000);
  }

    return (
      <div className="newGame">
        <ul className="show-num-list">
          {value.map((num,index)=>{
            return <li key={index}>{num}</li>
          })}
        </ul>
        <button className="btn" onClick={produceNewNum} >New Game</button><br/><br/>
        <button className="btn" onClick={showNum}>Show Num</button>&nbsp;
      </div>
    )
  
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