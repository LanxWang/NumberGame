import React from 'react'
import {connect} from 'react-redux'
import { createCheckNumAction} from '../../redux/actions/checkGame'
import { createInputNumAction} from '../../redux/actions/inputNum'
import {createInputTipAction,crateGameOverTipAction} from '../../redux/actions/inputTip'
import {createGameStateAction} from '../../redux/actions/gameState'
import './index.css'

function CheckGame(props) {

  const[isCheck,setIsCheck] = React.useState(false)
  const{getInputNum,getInputTip,checkNum,changeGameState,getGameOverTip}=props
  const{isGameOver,rightNum,inputNum,result,inputTip}=props

  function handleNum(event) {
    setIsCheck(false)
    const str = event.target.value;
    getInputNum(str)
    getInputTip(rightNum, event.target.value)
    const reg=/^[0-9]{4}$/
    const setInput = new Set(str)
    if (reg.test(str) && setInput.size===4) {
      setIsCheck(true)
    }
  }

  function checkInputNum() {
    if (isGameOver) return
    if(isCheck){
    checkNum(rightNum,inputNum)
      if(rightNum.join('') === inputNum){
        setIsCheck(false)
        changeGameState(true)
        getGameOverTip()
      } 
    }
  }
//滑动滚轮
//React.useEffect相当于componentDidMount和componentDidUpdate
  React.useEffect(()=>{
     ResultRef.current.scrollTop += ResultRef.current.scrollHeight -30
  },[result])//第二个参数，不写是谁都检测，写空数组是谁都不检测

  const ResultRef = React.useRef()
  return (
    <div className="checkGame">
      <h3 className="tipTitle">Check Result</h3>
      <ul className="result" ref= {ResultRef}>
        {result.map((str,index)=>{
          return <li className="tipsItem" key={index}>{str}</li>
        })}
      </ul>
      <input type="text" min="0000" max="9999" maxLength="4" onChange={handleNum} value={inputNum} disabled={isGameOver ? 'disabled' : ''} ></input>
      <p className="inputTip">{inputTip}</p>
      <button className="btn" onClick={checkInputNum}>Check</button>
    </div>
  )
  
}

export default connect(
  state=>({
    rightNum:state.newGame,
    result:state.checkGame,
    inputNum:state.inputNum,
    inputTip:state.inputTip,
    isGameOver:state.gameState
    
  }),

  {
    checkNum:createCheckNumAction,
    getInputNum:createInputNumAction,
    getInputTip:createInputTipAction,
    changeGameState:createGameStateAction,
    getGameOverTip:crateGameOverTipAction
  }
)(CheckGame)
