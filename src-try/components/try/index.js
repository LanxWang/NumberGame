import React, { Component } from 'react'
import './index.css'
export default class Try extends Component {
  state={inputTips:"tips:"}
  handleNum = ()=>{
    const reg=/^[0-9]+$/
    const str = event.target.value;
    if(!reg.exec(str)){
      this.setState({inputTips:`请输入数字`})
    }else{
      str.length === 4 ? this.setState({inputTips:`已输入四位数字`}) : this.setState({inputTips:`继续输入`})
    }
  }
  render() {
    const arr=[2,3,4,5]
    return (
      <div >
        <h3>四位数字框</h3>
        <ul className="show-num-list">
          {arr.map((num,index)=>{
            return <li key={index}>{num}</li>
          })}
        </ul>
        <input type="text" min="0000" max="9999" maxLength="4" onChange={this.handleNum}></input>
        <p>{this.state.inputTips}</p>
      </div>
    )
  }
}
