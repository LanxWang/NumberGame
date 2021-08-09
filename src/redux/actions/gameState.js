import {ChangeGameState} from '../constant.js'
export const createGameStateAction = (state)=>({type:ChangeGameState,data:state})