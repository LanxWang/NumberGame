import { ChangeGameState } from '../constant.js'
const innitState = true
export default function gameState(preState=innitState,action){
  const {type,data} =action
  switch (type) {
    case ChangeGameState:
      return data
  
    default:
      return preState
  }
}