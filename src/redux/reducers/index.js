/**
 * 该文件用于汇总所有reducer变成一个总的reducer
 */
//引入combineReducers，用于汇总多个reducer
 import {combineReducers} from 'redux'
import checkGame from './checkGame.js'
import newGame from './newGame.js'
import inputNum from './inputNum.js'
import inputTip from './inputTip.js'
import gameState from './gameState.js'

//合并所有的reducer
export default combineReducers({
  checkGame,
  newGame,
  inputNum,
  inputTip,
  gameState
})
