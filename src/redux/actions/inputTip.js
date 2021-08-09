import {Tip,StartTip,GameOverTip} from '../constant.js'
export const createInputTipAction = (rightNum,inputStr) => ({type:Tip, data:{rightNum,inputStr}})
export const createStartTipAction = () => ({type:StartTip})
export const crateGameOverTipAction = () => ({type:GameOverTip})