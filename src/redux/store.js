/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为Count组件服务的reducer
import checkGameReducer from './reducers/checkGame.js'
//引入为Person组件服务的reducer
import newGameReducer from './reducers/newGame.js'
import inputNumReducer from './reducers/inputNum.js'
import inputTipReducer from './reducers/inputTip.js'
import gameStateReducer from './reducers/gameState.js'
 //引入redux-thunk，用于指出异步action
import thunk from 'redux-thunk'

//合并所有的reducer
const allReducer = combineReducers({
 // checkGame:checkGameReducer,
  newGame:newGameReducer,
  checkGame: checkGameReducer,
  inputNum: inputNumReducer,
  inputTip:  inputTipReducer,
  gameState: gameStateReducer
  
})
//暴露store
export default createStore(allReducer,applyMiddleware(thunk))


