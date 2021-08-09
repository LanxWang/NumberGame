import {Tip,StartTip,GameOverTip} from '../constant.js'
const innitState = 'tips:请点击New Game 开始游戏'
export default function inputNum(preState=innitState,action){
  const {type} = action
  
  switch (type) {
    case Tip:
      {
        const reg=/^[0-9]+$/
        const {data} = action
        const {rightNum,inputStr} = data
        const setInput = new Set(inputStr)
        if(rightNum[0]===""){return 'tips:请点击New Game 开始游戏'}
        if(inputStr.length===0) return 'tips:请输入四位数字'
        if(!reg.exec(inputStr)){
          return `tips:输入错误,请输入数字`
        }else{
          if(inputStr.length!==setInput.size){
            return `tips:请不要输入重复数字`
          }else if(inputStr.length === 4){
            return `tips:点击check按钮验证`
            // this.setState({isCheck:true})
          }else{
            return `继续输入`
          }
        }
      }
      case StartTip:
        return 'tips:游戏开始,请输入四位数字'
      case GameOverTip:
        return 'tips:游戏结束,请new game开始新游戏'
    default:
      return preState
  }
  
}