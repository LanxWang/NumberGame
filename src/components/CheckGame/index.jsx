import React, { Component } from 'react'
import './index.css'

export default class CheckGame extends Component {
  state={
    checkNum:[],
  }
  checkInputNum=()=>{
    // const {tips} = this.state
    const arrNum = this.props.num 
    const inputNum=this.inputNum.value
    let countA=0,countB=0,countC=0
    const reg = /^\d{4}$/
    if(arrNum.length===0) {
      alert('请点击New Game 开始游戏') 
      return
    }
    if (reg.exec(inputNum)) {
      const setInput = new Set(inputNum)//输入数组去重
      if(setInput.size!==4){
        alert('请输入四个不重复的数字')
      }else{
        for (let i = 0; i < arrNum.length; i++) {
          for (let j = 0; j < inputNum.split('').length; j++) {
            // eslint-disable-next-line
            if(inputNum.split('')[i]==arrNum[j]){
              i===j ?  countA = countA+1 : countB = countB+1
              break
            }        
          }
        }
        countC = 4-countA-countB;
        const str=`Num:${inputNum} A:${countA} B:${countB} C:${countC}   `
        console.log(`str:`, str)
        
        //this.setState({tips:[...tips,str]})
        //console.log(`tips:`, tips)
        // this.setState({A:countA,B:countB,C:countC})
        //this.setState({checkNum:[...inputNum.split('')]})
        this.props.getTips(str)
        if(countA===4) (alert("Win"))
        } 
    }else{
      alert(`输入字符不符合要求，请输入四位数字`)
    }
  }
  render() {
    const {tips} = this.state
    return (
      <div className="checkGame">
        <h3 className="tipTitle">Tips</h3>
        <div className="tips">{this.props.tips}</div>
        {/* <p className="tips">inputNum:{checkNum} A:{A} B:{B} C:{C}</p> */}
        <input className="numInput" type="text" ref={c=>{this.inputNum=c}} placeholder="请输入四位数字，点击Check按钮" /><br/>
        <button className="btn" onClick={this.checkInputNum}>Check</button>
      </div>
    )
  }
}
