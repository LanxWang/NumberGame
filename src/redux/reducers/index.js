/**
 * 该文件用于汇总所有reducer变成一个总的reducer
 */
//引入combineReducers，用于汇总多个reducer
 import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
import checkGame from './checkGame'
//引入为Person组件服务的reducer
import newGame from './newGame'
import inputNum from './inputNum'
import inputTip from './inputTip'
import gameState from './gameState'

//合并所有的reducer
export default combineReducers({
  checkGame,
  newGame,
  inputNum,
  inputTip,
  gameState
})
