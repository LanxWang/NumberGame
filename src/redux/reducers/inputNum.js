import {Input,ClearInput} from '../constant.js'
export default function inputNum(preState='',action){
  const {type,data}=action
  switch (type) {
    case Input:
      console.log(`inputNum inputNum:`, data)
      return data
    case ClearInput:
      return ''
    default:
      return preState
  }
}